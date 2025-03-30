//Components
import BannerHome from "../components/banner/BannerHome";
import FramerText from "../components/content/FramerText";
import Products from "../components/content/Products";

function Home() {
  return (
    <div className="opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]">
      <BannerHome />

      <Products />

      <FramerText />
    </div>
  );
}

export default Home;
