import Header from "./components/header"
import Banner from "./components/banner"
import Clients from "./components/clients"
import Service from "./components/service"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/whyus"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sev from "./components/sev"
import About from "./components/About"
import Product from "./components/Product"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Clients />
            <Service />
            <WhyChooseUs />
            <Sev />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
