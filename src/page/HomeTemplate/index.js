import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./_Component/Footer"
import Header from "./_Component/Header"

export default function HomeTemplate() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
