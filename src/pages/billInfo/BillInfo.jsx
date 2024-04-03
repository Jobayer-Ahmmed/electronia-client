import { useContext, useEffect, useState } from "react"
import useAxios from "../../hooks/useAxios/useAxios"
import { Context } from "../../context/AuthProvider"

const BillInfo = () => {
    const {newUser} = useContext(Context)
    const [billData, setBillData] = useState([])
    const rootAxios = useAxios()
    const email = newUser?.email
    useEffect(()=>{
        rootAxios.get(`/bill_info?email=${email}`)
        .then(res=>setBillData(res.data))
    },[])
  return (
    <div className="flex justify-center my-myMargin">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {
            billData?.map((data, id)=><div className="shadow-2xl p-10 text-gray-800" key={id}>
                <h3 className="text-center">Bill No:{id+1}</h3>
                            <p className="text-lg"><span className="font-medium">Name:</span> {data.full_name}</p>
            <p className="text-lg"><span className="font-medium">Email:</span> {data.email}</p>
            <p className="text-lg"><span className="font-medium">Total Amount:</span> {data.amount} TK</p>
            <p className="text-lg"><span className="font-medium">Mobile Account:</span> {data.sender_number} </p>
            <p className="text-lg"><span className="font-medium">Transaction ID:</span> {data.transaction_id}</p>
            <p className="text-lg"><span className="font-medium">Date:</span> {data.date}</p>
            </div>)
        }
      </div>
    </div>
  )
}

export default BillInfo
