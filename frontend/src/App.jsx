import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar"; 
import ScheduleMeeting from "./components/ScheduleMeeting"; // ✅ make sure this file exists
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import AuthForm from "./components/AuthForm";
import AdminDashboard from "./components/AdminDashboard";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import CareersPage from "./components/CareersPage";


export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/meeting" element={<ScheduleMeeting />} /> {/* ✅ correct casing */}
        <Route path="/contacts" element={<ContactPage/>} />
        <Route path="/authForm" element={<AuthForm/>} />
        {/* <Route path="/dashboard" element={<AdminDashboard/>}/> */}
        <Route path="/dashboard" element={<AdminDashboard/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/Portfolio" element={<Portfolio/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/careers" element={<CareersPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}
