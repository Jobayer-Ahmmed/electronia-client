import  {  useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Card from "../../../shared/Card";

const Phone = () => {
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  rootAxios.get("/phone").then((res) => setAllData(res.data));

  return (
    <div className="my-myMargin">
      <h1 className="text-center mb-titleMargin text-cardTextColor text-2xl font-medium">
        Phones
      </h1>
      <Card allData={allData} />
    </div>
  );
};

export default Phone;
