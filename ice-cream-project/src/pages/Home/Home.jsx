import Promotion from "../../components/Promotion/Promotion";
import Services from "../../components/Services/Services";
import Slider from "../../components/Slider/Slider";
import About from "../../components/About/About";
import FooterSlider from "../../components/FooterSlider/FooterSlider";
import HomeMenuDemoList from "../../components/HomeMenuDemoList/HomeMenuDemoList";

const iceCreamData = [
  {
      name: "Chocolate Orange Hazelnut",
      img: "/image/home/home-menu-demo/ice-cream/square-16.jpg",
      description: "Vani - Hạt dẻ",
      subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
      price: 29000
  },
  {
      name: "Pralines 'n Cream",
      img: "/image/home/home-menu-demo/ice-cream/square-17.jpg",
      description: "Vani - Hạt dẻ",
      subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
      price: 50000
  },
  {
      name: "Blueberry Pannacotta",
      img: "/image/home/home-menu-demo/ice-cream/square-18.jpg",
      description: "Vani - Hạt dẻ",
      subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
      price: 55000
  },
  {
      name: "Matcha 'n Cream",
      img: "/image/home/home-menu-demo/ice-cream/square-19.jpg",
      description: "Vani - Hạt dẻ",
      subDescription: " -- Viên kem vani truyền thống hòa lẫn với hạt dẻ ngọt bùi, được tô điểm bởi những dải caramel mềm mại",
      price: 39000
  }
]


const Home = () => {
    return (
      <div>
        <Slider />
        <Services />
        <About />
        <Promotion />
        <HomeMenuDemoList data={iceCreamData}/>
        {/* <HomeMenuDemoList iceScreamData/> */}
        <FooterSlider />
      </div>
    );
  };
  
  export default Home;