import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import CompleteProfile from './pages/CompleteProfile'
import ContactUs from './pages/ContactUs'
import PrivacyPolicy from './pages/policypages/PrivacyPolicy'
import TermsAndConditions from './pages/policypages/TermsAndConditions'
import CancellationAndRefund from './pages/policypages/CancellationAndRefund'
import ShippingAndDelivery from './pages/policypages/ShippingAndDelivery'
import CoursePayment from './pages/CoursePayment'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tncs" element={<TermsAndConditions />} />
          <Route path="/refunds" element={<CancellationAndRefund />} />
          <Route path="/shipping" element={<ShippingAndDelivery />} />
          <Route path="/payment" element={<CoursePayment />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
