import { useContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { Context } from "../../context/AuthProvider";
import useCartData from "../../hooks/useCartData/useCartData";
import { getLocalstorageData } from "../../localstorage/localstorage";
import { Link } from "react-router-dom";

const Carts = () => {
  const { newUser, handleCheckOutPrice } = useContext(Context);
  const [totalPriceDB, setTotalPriceDB] = useState(0);
  const [totalPriceLocal, setTotalPriceLocal] = useState(0);
  const cartDB = useCartData();
  const cartLocal = getLocalstorageData();
  const email = newUser?.email;


  useEffect(() => {
    setTotalPriceDB(
      cartDB.reduce((sum, item) => sum + parseInt(item.price), 0)
    );
    // handleCheckOutPrice(totalPriceDB)
    // console.log(totalPriceDB)
  }, [cartDB]);

  useEffect(() => {
    setTotalPriceLocal(
      cartLocal.reduce((sum, item) => sum + parseInt(item.price), 0)
    );
  }, [cartLocal]);

  return (
    <div className="min-h-[80vh] my-myMargin w-4/5 lg:w-3/5 mx-auto text-cardTextColor">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center gap-10">
        <div className="w-full">
          {email
            ? cartDB?.map((data) => <Cart key={data._id} data={data} />)
            : cartLocal?.map((data, id) => <Cart key={id} data={data} />)}
        </div>
        <div className="w-4/5 md:w-[400px] ">
          <div className="w-full border-2 border-black rounded-lg py-8 px-4">
            <p className="text-xl my-3">
              Total Item:{" "}
              <span className="font-bold">
                {email ? cartDB.length : cartLocal.length}
              </span>
            </p>
            <p className="text-xl">
              Total Price:{" "}
              <span className="font-bold">
                {email? totalPriceDB: totalPriceLocal}{" "}
                TK
              </span>
            </p>
            {
              (cartDB.length || totalPriceLocal)?<Link className="btn btn-sm btn-outline text-black text-xl mt-8" onClick={()=>handleCheckOutPrice(totalPriceDB)} to="/check_out">Check Out</Link>: ''
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
