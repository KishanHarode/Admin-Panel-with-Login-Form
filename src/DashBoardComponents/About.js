import React from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import Footer from './Footer';
import '../StylingDashBoard/About.css';
import { Link } from 'react-router-dom';
import { medicareMapping } from './MedicareMapping';

export const About = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div className='d-flex'>
        <SideBar />
        {/* <div className='container'> */}
          <div className='container cardContainer' style={{overflowY:"scroll",maxHeight: '390px' }} >
          {
            medicareMapping.map((card)=>{
              return(
                <div className='card customCards' key={card.id} >
                  <img src={card.image} className='card-img-top' alt='...' style={{onjectFit:"cover",height:"170px"}}/>
                  <div className='card-body'>
                      <span className='card-title' style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>{card.card_title}</span>
                      <p className='card-text text-center' style={{ fontSize: "11px", fontFamily: "sans-serif", marginTop: "10px" }}>{card.card_text}</p>
                    <Link to={`/readMore/${card.id}`}><button className='btn btn-outline-success'>Read More</button></Link>
                  </div>  
                </div>
              )
            })
          }
          </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
};
