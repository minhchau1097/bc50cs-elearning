import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./_Component/Footer"
import Header from "./_Component/Header"
import BackToTop from './_Component/BackToTop';

export default function HomeTemplate() {
  return (
    <div>
      <Header />
      <BackToTop />
      <Outlet />
      <Footer />
    </div>
  )
}
