import Features from "./Features";
import Testimonial from "../landingPage/Testnomial";
import background from "../../assets/background.jpg";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      <div
        className="w-full h-screen"
        style={{
          background: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backdropFilter: "blur(15px)",
        }}
      >
        <Features />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
