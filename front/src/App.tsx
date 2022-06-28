import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navigation from './components/shared/navigation/Navigation';
import Dashboard from './components/pages/dashboard/Dashboard';
import Products from './components/pages/Products/Products';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<main><Dashboard /></main>}/>
        <Route path='/products' element={<Products />} />    
      </Routes>
    </Router>
  );
}

export default App;


