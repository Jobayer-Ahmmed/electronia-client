import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import {
  getLocalstorageData,
  removeLocalstorageData,
} from "../localstorage/localstorage";
import useAxios from "../hooks/useAxios/useAxios";

export const Context = createContext();

const AuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState();
  const [loading, setLoading] = useState(true);
  const [cartAddCount, setCartAddCount] = useState(0);
  const [cartArray, setCartArray] = useState([]);
  const [checkOutPrice, setCheckOutPrice] = useState(0)
  const rootAxios = useAxios();
  const localData = getLocalstorageData();


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const cartAddition = () => {
    setCartAddCount(cartAddCount + 1);
  };

  const postLocalDataInDB = (email) => {
    console.log(email);

    localData?.forEach((obj) => {
      const id = obj.cartId;
      obj.email = email;
      delete obj.cartId;

      rootAxios
        .post(`/cart?email=${email}`, obj)
        .then(() => {
          console.log(id);
          removeLocalstorageData(id);
          cartAddition();
        })
        .catch((error) => console.error("Error:", error));
    });
  };

  const handleCheckOutPrice = (price) =>{
    console.log(price)
    setCheckOutPrice(price)
  }
  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (myCurrentUser) => {
      setLoading(false);
      setNewUser(myCurrentUser);
    });
    return () => unSubscribe();
  }, []);

  const contextData = {
    newUser,
    login,
    logOut,
    createUser,
    loading,
    cartAddition,
    cartAddCount,
    cartArray,
    postLocalDataInDB,
    handleCheckOutPrice,
    checkOutPrice
  };

  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
