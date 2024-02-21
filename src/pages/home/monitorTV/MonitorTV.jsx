import  {  useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Card from "../../../shared/Card";

const MonitorTV = () => {
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  rootAxios.get("/monitorTV").then((res) => setAllData(res.data));

  return (
    <div className="my-myMargin">
      <h1 className="text-center mb-titleMargin text-cardTextColor text-2xl font-medium">
        Monitor & TV
      </h1>
      <Card allData={allData} />
    </div>
  );
};

export default MonitorTV;
