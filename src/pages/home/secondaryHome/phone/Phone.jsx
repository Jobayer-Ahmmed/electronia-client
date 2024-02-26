import  {  useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios/useAxios";
import Card from "../../../../shared/Card";

const Phone = () => {
  const [allData, setAllData] = useState([]);
  const [isBoolean, setIsBoolean] = useState(true);
  const rootAxios = useAxios();

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await rootAxios.get("/phone")
        setAllData(res.data)
      }catch(err){
        console.log(`Error in phone: ${err}`)
      }
    } 
    fetchData()
  },[])

  return (
    <div className="my-myMargin">
      <h1 className="text-center mb-titleMargin text-cardTextColor text-2xl font-medium">
        Phones
      </h1>
      <Card allData={allData} flag={isBoolean} />
      <div className="flex justify-end pt-5  lg:pr-40">
        <button
          onClick={() => setIsBoolean(!isBoolean)}
          className="btn btn-outline text-black"
        >
          {isBoolean ? "More" : "Less"}
        </button>
      </div>
    </div>
  );
};

export default Phone;
