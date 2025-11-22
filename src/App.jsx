import Navbar from "./components/Navbar"
import Banner1 from "./components/Banner1"
import About_Sec from "./components/About_Sec"
import Room_Sec from "./components/Room_Sec"
import Video_Sec from "./components/Video_Sec"
import Facilities from "./components/Facilities"
import Services_Sec from "./components/Services_Sec"
import Blog_Sec from "./components/Blog_Sec"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner1/>
      <About_Sec/>
      <Room_Sec/>
      <Video_Sec/>
      <Facilities/>
      <Services_Sec/>
      <Blog_Sec/>
      <Footer/>
    </div>
  )
}

export default App