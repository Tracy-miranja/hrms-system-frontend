import Header from "./components/header"
import Banner from "./components/banner"
import Clients from "./components/clients"
import Service from "./components/service"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/whyus"
import { BrowserRouter as Router } from "react-router-dom";
import Sev from "./components/sev"
function App() {
  return (
    <Router>
    <>
      <div>
       <Banner />
       <Clients />
       <Service />
       <WhyChooseUs />
       <Sev/>
       <Footer />
      
      </div>
      
    </>
    </Router>
  )
}

export default App
