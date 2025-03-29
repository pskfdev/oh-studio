//Components
import BannerHome from '../components/banner/BannerHome';
import FramerText from '../components/content/FramerText';
import Products from '../components/content/Products';


function Home() {
  return (
    <div>
      <BannerHome />

      <Products />

      <FramerText />
    </div>
  )
}

export default Home;