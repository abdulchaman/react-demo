import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import Search from './components/search/Search';
import EditProfile from './components/Profile/EditProfile';
const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main></Main>}>
                <Route index element={<Home></Home>}></Route>
                <Route path='login' element={<Login></Login>}></Route>
                <Route path='signup' element={<Signup></Signup>}></Route>
                <Route path='search' element={<Search></Search>}></Route>
                <Route path='editprofile' element={<EditProfile></EditProfile>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing