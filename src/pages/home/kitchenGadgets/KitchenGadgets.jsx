import  {  useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";
import Card from "../../../shared/Card";

const KitchenGadgets = () => {
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  rootAxios.get("/kitchenGadgets").then((res) => setAllData(res.data));

  return (
    <div className="my-myMargin">
      <h1 className="text-center mb-titleMargin text-cardTextColor text-2xl font-medium">
        Kitchen Gadets
      </h1>
      <Card allData={allData} />
    </div>
  );
};

export default KitchenGadgets;
