import { Context } from "../../context/AuthProvider"
import useAxios from "../../hooks/useAxios/useAxios"
import { useContext, useEffect } from "react"


const PaymentSuccess = () => {
    const {newUser} = useContext(Context)
    const rootAxios = useAxios()
    const email = newUser?.email

    useEffect(()=>{
        rootAxios.delete(`/cart_empty?email=${email}`)
        .then(()=>console.log("cart empty"))
    },[])

  return (
    <div>
      <div className="w-80 md:w-[450px] mx-auto py-20 border-2 border-yellow-200 shadow-xl my-myMargin rounded-lg">
        <p className="text-green-800 text-xl text-center">Payment successfull!</p>
        <p className="text-green-800 text-xl text-center mt-2">Thank you for completing your payment</p>
      </div>
    </div>
  )
}

export default PaymentSuccess
