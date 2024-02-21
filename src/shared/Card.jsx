import PropTypes from 'prop-types'

const Card = ({allData}) => {  
  return (
<div className='flex justify-center items-center'>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allData?.map((data) => {
            const {
              _id,
              product_name,
              brand,
              model,
              image,
              price,
              description,
            } = data;
            return (
              <div
                key={_id}
                className="w-80 h-[325px] rounded-lg shadow-2xl p-4 bg-cardColor text-cardTextColor"
              >
                <img src={image} alt="" className="w-full h-40 rounded-lg" />
                <p className="mt-5 mb-2 text-lg font-medium">{product_name}</p>
                <p className="mb-2 font-semibold">{price} TK</p>
                <button className="rounded px-6 py-2 bg-gray-200 font-semibold text-textColor active:px-[25px] active:py-[9px]">
                  Add to cart
                </button>
              </div>
            );
          })}
    </div>
</div>
  );
};

Card.propTypes = {
    allData: PropTypes.array,
  };

export default Card;