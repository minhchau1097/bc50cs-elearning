import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import renderRoutes from './routes';
import { ToastContainer, toast,Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <BrowserRouter  >
          <Routes >

            {renderRoutes()}


          </Routes>
        </BrowserRouter>
      </Suspense>
      <ToastContainer
transition={Slide}
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </Fragment>
  );
}

export default App;
