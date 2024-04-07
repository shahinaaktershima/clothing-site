import Marquee from "react-fast-marquee";


const Slider = () => {
    return (
        <div>

            <h2 className="text-center mt-4 font-bold text-4xl text-blue-400">Our Client Farm</h2>
            <Marquee className="mt-10 h-55 w-55">
          
            <img className="h-full w-full " src="picture1.jpg" alt="" />
            <img className=" h-full w-full" src="picture2.jpg" alt="" />
            <img className="  h-[389px]" src="picture3.webp" alt="" />
         
             </Marquee>
        </div>
    );
};

export default Slider;