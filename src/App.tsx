import React from "react";
import { BrowserRouter, Routes } from 'react-router-dom';
import { Fragment, Suspense } from 'react';
import renderRoutes from './routes';

import './App.css';

function App(): any {
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
