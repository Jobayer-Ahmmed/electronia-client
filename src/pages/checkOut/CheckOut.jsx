import { useContext } from 'react';
import useAxios from '../../hooks/useAxios/useAxios'
import { useForm } from 'react-hook-form';
import { Context } from '../../context/AuthProvider';

const CheckOut = () => {
  const {newUser, checkOutPrice} = useContext(Context)
  const rootAxios = useAxios()
  const {
    register,
    handleSubmit, 
    formState: { errors },
  } = useForm();

  const email = newUser?.email
  const name = newUser?.displayName

  // console.log(checkOutPrice)

  const onSubmit = (data) => {
    rootAxios.post("/payment", data)
    .then(res=>{


      window.location.href = res.data.payment_url;

    })
  }


  return (
    <div className='w-80 md:w-[450px] mx-auto my-myMargin  border-2 border-yellow-200 shadow-xl rounded-lg flex justify-center py-10'>
        <form className=" " onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("full_name", { required: true })}
            placeholder="Name"
            value={name}
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.full_name && (
            <span className="text-red-700">full_name is required</span>
          )}{" "}
          <br />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            value={email}
            type="email"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.email && (
            <span className="text-red-700">Email is required</span>
          )}{" "}
          <br />
          <input
            {...register("amount", { required: true })}
            placeholder="amount"
            value={checkOutPrice}
            type="text"
            className="w-64 md:w-80 h-10 px-2 rounded"
          />
          <br />
          {errors.amount && (
            <span className="text-red-700">amount is required</span>
          )}{" "}
          <br />

          <input

            type="submit"
            value="Submit"
            className="mt-5 btn text-black font-bold bg-gradient-to-r from-yellow-700 to-yellow-600"
          />
        </form>
    </div>
  )
}

export default CheckOut
