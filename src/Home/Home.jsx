import About from "./About";
import Banner from "./Banner";
import Slider from "./Slider";
import Team from "./Team";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <About></About>
           <Team></Team>
        </div>
    );
};

export default Home;