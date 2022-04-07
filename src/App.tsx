import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout/Layout';

import Main from './Components/pages/Main/Main';
import About from './Components/pages/About/About';

const App = () => {
  console.log(0)
  return(
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Route>
      </Routes>
  )
}

export default App;