import { useEffect, useRef, useState } from "react"
import useAxios from "../../../hooks/useAxios/useAxios"
import Card from "../../../shared/Card"
import { gsap } from "gsap"

const Discount = () => {
  const [allData, setAllData] = useState([])
  const discountRef = useRef(null)
  const cardRef  =useRef(null)
  const rootAxios = useAxios()

  const colors = ['#C70039', '#C70039', "#000000", "#D2691E"]; 
  const colorCount = colors.length;

  useEffect(() => {
    let currentIndex = 0;

    const changeColor = () => {
      gsap.to(discountRef.current, {
        backgroundImage: `linear-gradient(to left, ${colors[currentIndex]} 0%, ${colors[(currentIndex + 1) % colorCount]} 100%)`,
        duration: 3, 
        onComplete: () => {
          currentIndex = (currentIndex + 1) % colorCount; // Increment index and loop back to 0 if it exceeds the length of the colors array
          changeColor(); // Recursive call to continue changing colors every second
        }
      });
    };

    changeColor(); // Start the color transition
  }, []);


  rootAxios.get("/discount")
    .then(res => setAllData(res.data))
  return <div className="my-myMargin">

<div className="w-full flex justify-center">
<div ref={discountRef} className="text-white text-xl md:text-3xl font-bold flex flex-col md:flex-row justify-between items-center py-7 px-24 w-full h-32 md:w-[600px] md:h-40 lg:w-[1000px] lg:h-56 rounded-ss-full rounded-ee-full mb-5">
        {/* bg-gradient-to-r from-red-400 to-red-800 */}
        <p>Up to 80% off</p>
        <p>Harry up!</p>
      </div>
</div>
      <Card ref={cardRef} allData={allData} />
  </div>
}

export default Discount