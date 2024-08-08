import {  Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './App.css';
import Navbar from './common/navbar';
import Sidebar from './common/sidebar';
import Books from './pages/books';
import Category from './pages/category';
import Users from './pages/users';
import Orders from './pages/orders';

function App() {

  const location = useLocation()

  return (
    <div className='cover2'><div className="App">
    <Navbar/>
    <div className='two'>
      <Sidebar/>
      <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route  path="/" element={<Users />} />
            <Route  path="/category" element={<Category />} />
            <Route  path="/orders" element={<Orders />} />
            <Route  path="/books" element={<Books />} />
            </Routes>
            </AnimatePresence>
    </div>
  </div></div>
    
  );
}

export default App;
