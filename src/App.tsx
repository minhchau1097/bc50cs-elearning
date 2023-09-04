import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import renderRoutes from './routes';
import { ToastContainer, toast } from 'react-toastify';
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
    </Fragment>
  );
}

export default App;
