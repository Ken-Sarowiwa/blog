import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import AddEdit from './pages/AddEdit';
import Blog from './pages/Blog';
import Notfound from './pages/Notfound';
import Home from './pages/Home';
import { About } from './pages/About';
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path= "/about" element={<About />}/>
          <Route path= "/addblog" element={<AddEdit />}/>
          <Route path= "/editBlog/ :id" element={<AddEdit />}/>
          <Route path= "/blog :id" element={<Blog />}/>
          <Route path= "*" element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
