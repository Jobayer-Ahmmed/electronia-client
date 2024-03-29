// import PropTypes from 'prop-types';
// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../context/AuthProvider';
// import useAxios from '../hooks/useAxios/useAxios';
// import { setLocalstorageData } from '../localstorage/localstorage';

// const Card = ({ allData, flag }) => {
//   return (
//     <div className='flex justify-center items-center'>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {flag ? allData.slice(0, 3).map((data) => renderCard(data)) : allData.map((data) => renderCard(data))}
//       </div>
//     </div>
//   );
// };

// const renderCard = (data) => {
//   const { cartAddition, newUser, cartAddCount, } = useContext(Context);
//   const email = newUser?.email
//   const rootAxios = useAxios()
//   const { _id, product_name, brand, model, image, price, description } = data;
//   const handleCart= () => {
//     if(email){
//       rootAxios.post("/cart", data)
//       .then(res=>console.log(res))
//     } else{
//       setLocalstorageData( image,  price);
      
//     }
//     cartAddition();
//   };
//   return (
//     <div key={_id} className="w-80 h-[325px] rounded-lg shadow-2xl p-4 bg-cardColor text-cardTextColor">
//       <img src={image} alt="" className="w-full h-40 rounded-lg" />
//       <p className="mt-5 mb-2 text-lg font-medium">{product_name}</p>
//       <p className="mb-2 font-semibold">{price} TK</p>
//       <Link  onClick={() => handleCart()} className="rounded px-6 py-2 bg-gray-200 font-semibold text-textColor active:px-[25px] active:py-[9px]">
//         Add to cart
//       </Link>
//     </div>
//   );
// };

// Card.propTypes = {
//   allData: PropTypes.arrayOf(PropTypes.object).isRequired,
//   flag: PropTypes.bool
// };

// export default Card;


import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Context } from '../context/AuthProvider';
import useAxios from '../hooks/useAxios/useAxios';
import { setLocalstorageData } from '../localstorage/localstorage';

const Card = ({ allData, flag }) => {
  return (
    <div className='flex justify-center items-center'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {flag ? allData.slice(0, 3).map((data) => <RenderCard key={data._id} data={data} />) : allData.map((data) => <RenderCard key={data._id} data={data} />)}
      </div>
    </div>
  );
};

const RenderCard = ({ data }) => {
  const { cartAddition, newUser } = useContext(Context);
  const email = newUser?.email;
  const rootAxios = useAxios();
  const {  product_name, image, price } = data;
  const cartId =  new Date().getTime();

 
  const cartDataObj= {email,product_name, image, price}
  const handleCart= () => {
    if(email){
      // console.log(cartDataObj)
      console.log("I am in handleCart in cartDB")
      rootAxios.post("/cart", cartDataObj)
      .then(res=>console.log(res))
    } else{
      // console.log("I am in before setLocalStorage")
      setLocalstorageData(cartId,product_name, image, price );
      
    }
    cartAddition();
  };

  return (
    <div className="w-80 h-[325px] rounded-lg shadow-2xl p-4 bg-cardColor text-cardTextColor">
      <img src={image} alt="" className="w-full h-40 rounded-lg" />
      <p className="mt-5 mb-2 text-lg font-medium">{product_name}</p>
      <p className="mb-2 font-semibold">{price} TK</p>
      <button onClick={handleCart} className="rounded px-6 py-2 bg-gray-200 font-semibold text-textColor active:px-[25px] active:py-[9px]">
        Add to cart
      </button>
    </div>
  );
};

Card.propTypes = {
  allData: PropTypes.arrayOf(PropTypes.object).isRequired,
  flag: PropTypes.bool
};

RenderCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Card;
