import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from "./_Component/Footer"
import Header from "./_Component/Header"
import BackToTop from './_Component/BackToTop';
import { createTheme } from '@mui/material';
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; 
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280, 
      xxl: 1536,
    },
  },
});

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
