import Header from "./components/header"
import Banner from "./components/banner"
import Clients from "./components/clients"
import Service from "./components/service"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/whyus"
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
    <>
      <div>
       <Banner />
       <Clients />
       <Service />
       <WhyChooseUs />
       <Footer />
      
      </div>
      
    </>
    </Router>
  )
}

export default App
