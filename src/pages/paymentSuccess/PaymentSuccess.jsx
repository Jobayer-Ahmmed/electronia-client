import { useSearchParams } from "react-router-dom"
import { Context } from "../../context/AuthProvider"
import useAxios from "../../hooks/useAxios/useAxios"
import { useContext, useEffect, useState } from "react"


const PaymentSuccess = () => {
    const {newUser} = useContext(Context)
    const [searchParams] = useSearchParams();
    const [paymentVerificationData, setPaymentVerificationData] = useState({})
    const [foundTnxId, setFoundTnxId] = useState()
    const [msg, setMsg] = useState('')
    const rootAxios = useAxios()

    const email = newUser?.email
    const invoiceId = searchParams.get('invoice_id');


    useEffect(()=>{
        rootAxios.delete(`/cart_empty?email=${email}`)
        .then(()=>console.log("cart empty"))
    },[])

    useEffect(()=>{
      rootAxios.get("/success")
      .then(res=>console.log(res))
    },[])
    useEffect(()=>{
      rootAxios.post(`/verify-payment?invoice_id=${invoiceId}`)
      .then(res=>{
        setPaymentVerificationData(res.data)

      })
    },[invoiceId])

    useEffect(()=>{

      if(paymentVerificationData.transaction_id){
        rootAxios.get(`/bill?transaction_id=${paymentVerificationData.transaction_id}`)
        .then(res=>setFoundTnxId(res.data.transaction_id))
      }

    },[rootAxios])

    const handlePaymentInfo =()=>{
      const {full_name, email, amount, sender_number, transaction_id, date} = paymentVerificationData
      const billData = {full_name, email, amount, sender_number, transaction_id, date}
      console.log(full_name, email, amount, sender_number, transaction_id, date)

      if(foundTnxId){
        setMsg("You have already saved")
      } else{       
        rootAxios.post("/bill", billData)
        .then(res=>console.log(res))
      }

    }

  

  return (
    <div>
      <div className="w-80 md:w-[450px] mx-auto py-20 border-2 border-yellow-200 shadow-xl my-myMargin rounded-lg">
        <p className="text-green-800 text-xl text-center">Payment successfull!</p>
        <p className="text-green-800 text-xl text-center mt-2">Thank you for completing your payment</p>
        {
          invoiceId ? <div className="text-gray-700 px-5 md:px-10" id="payment_info">
            <h2 className="text-2xl font-bold mt-titleMargin mb-3 w-40 mx-auto border-b-2 border-gray-600 text-center">Payment Info</h2>
            <p className="text-lg"><span className="font-medium">Name:</span> {paymentVerificationData.full_name}</p>
            <p className="text-lg"><span className="font-medium">Email:</span> {paymentVerificationData.email}</p>
            <p className="text-lg"><span className="font-medium">Total Amount:</span> {paymentVerificationData.amount} TK</p>
            <p className="text-lg"><span className="font-medium">Mobile Account:</span> {paymentVerificationData.sender_number} </p>
            <p className="text-lg"><span className="font-medium">Transaction ID:</span> {paymentVerificationData.transaction_id}</p>
            <p className="text-lg"><span className="font-medium">Date:</span> {paymentVerificationData.date}</p>
            <button onClick={handlePaymentInfo} className="btn btn-outline text-lg text-gray-800 mt-4">Save the payment info</button>
            <p className="mt-4 text-lg text-red-900">{msg}</p>
          </div>:''
        }
      </div>
    </div>
  )
}

export default PaymentSuccess
