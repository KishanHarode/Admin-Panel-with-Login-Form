import React from 'react';
import Header from './Header';
import '../StylingDashBoard/Dashboard.css';
import { SideBar } from './SideBar';
import CardComponent from './CardComponent';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="customContainer">
      <Header />
      <div className='d-flex '>
        <SideBar/>
        
        <CardComponent/>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
{/* <div className='container DashboardContainer'>
          <div className='container'>
          <CardComponent/>
          </div>
        </div> */}
        {/* <div className='container border border-danger DashboardContainer'>
          <CardComponent/>
        </div> */}