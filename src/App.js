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
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Header/>
      <ToastContainer/>
        <Routes>
            <Route path= "/" element={<Home />}/>
            <Route path= "/about" element={<About />}/>
            <Route path= "/addblog" element={<AddEdit />}/>
            <Route path= "/editBlog/ :id" element={<AddEdit />}/>
            <Route path= "/blog :id" element={<Blog />}/>
            <Route path= "*" element={<Notfound />}/>
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
