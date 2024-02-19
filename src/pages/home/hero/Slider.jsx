import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import s1 from "../../../assets/slider-Images/s1.jpg"
import s2 from "../../../assets/slider-Images/s2.jpg"
import s3 from "../../../assets/slider-Images/s3.png"
import s4 from "../../../assets/slider-Images/s4.jpg"


const Slider = () => {
  return (
<div className="text-center">
<Carousel autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} showStatus={false}>
    <div>
        <img src={s1}/>
    </div>
    <div>
        <img src={s2} />
    </div>
    <div>
        <img src={s3} />
    </div>
    <div>
        <img src={s4} />
    </div>
</Carousel>
</div>
  )
}

export default Slider