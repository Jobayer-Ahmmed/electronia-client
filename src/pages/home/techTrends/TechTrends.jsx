import { useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Card from "../../../shared/Card";

const TechTrends = () => {
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  rootAxios.get("/tech-trends").then((res) => setAllData(res.data));
  return (
    <div className="my-myMargin">
      <h1 className="text-center mb-titleMargin text-cardTextColor text-2xl font-medium">
        Trending Technology
      </h1>
      <Card allData={allData} />
    </div>
  );
};

export default TechTrends;
