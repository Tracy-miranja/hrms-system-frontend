import Header from "./components/header"
import Banner from "./components/banner"
import Clients from "./components/clients"
import Service from "./components/service"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/whyus"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sev from "./components/sev"
import About from "./components/About"
import PayrollCalculator from "./components/PayrollCalculator"
import HumanResource from "./components/HumanResource"
import Payroll from "./components/Payroll"
import Cms from "./components/Cms"
import CMS from "./components/Cms"
import Employee from "./components/employee"
import Recruitment from "./components/Recruitment"
import ATS from "./components/ATS"
import Pricing from "./components/Pricing"
import { Contact } from "lucide-react"
import Kenyaguide from "./components/Kenyaguide"
import RwandaGuide from "./components/RwandaGuide"
import TanzaniaGuide from "./components/TanzaniaGuide"
import UgandaGuide from "./components/UgandaGuide"
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
        <Route path="/hr-management-software" element={<HumanResource />}/>
        <Route path="/CMS-software" element={<CMS />}/>
        <Route path="/payroll-software" element={<Payroll />}/>
        <Route path="/employee-benefits" element={< Employee/>}/>
        <Route path="/Recruitment" element={< Recruitment/>}/>
        <Route path="/payrollCalculator" element={<PayrollCalculator />} />
        <Route path="/ATS" element={<ATS/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="/kenya-country-guide" element={<Kenyaguide />}/>
        <Route path="/rwanda-country-guide" element={<RwandaGuide/>}/>
        <Route path="/tanzania-country-guide" element={<TanzaniaGuide/>}/>
        <Route path="/uganda-country-guide" element={<UgandaGuide/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
