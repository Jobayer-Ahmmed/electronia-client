import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios/useAxios";

const Feedback = () => {
  const [allData, setAllData] = useState([]);
  const rootAxios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await rootAxios.get("/feedback");
        setAllData(res.data);
      } catch (err) {
        console.log(`Error in feedback: ${err}`);
      }
    };
    fetchData();
  });

  return (
    <div className="my-myMargin text-gray-300">
      <h1 className="text-center mb-titleMargin text-2xl font-medium">
        Feedbacks
      </h1>
      <div className="flex flex-wrap justify-center  gap-8">
        {allData?.map((data) => (
          <div className="w-full md:w-[300px] lg:w-[500px]" key={data._id}>
            <div>
              <img
                className="w-20 h-20 rounded-3xl border-4 border-gray-400"
                src={data.image}
                alt=""
              />
            </div>
            <h3 className="my-2 text-lg font-semibold">{data.customer_name}</h3>
            <p>{data.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
