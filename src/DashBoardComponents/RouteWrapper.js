import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import { About } from './About';
import Reports from './Reports';
import Overview from './Overview';
import Users from './Users';
import Update from './Update';
import ReadMore from './ReadMore';
const RouteWrapper = ()=>{
    return(
        <>
           <BrowserRouter>
             <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/report" element={<Reports/>}/>
                <Route path="/Overview" element={<Overview/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/update/:id" element={<Update/>}/>
                <Route path="/readMore/:id" element={<ReadMore/>}/>
             </Routes>
           </BrowserRouter>
        </>
    )
}
export default RouteWrapper;