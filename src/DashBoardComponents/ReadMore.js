import React from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import Footer from './Footer';
import { medicareMapping } from './MedicareMapping';
import { useParams } from 'react-router-dom';
import '../StylingDashBoard/ReadMore.css';

const ReadMore = () => {
  const { id } = useParams();
  const selectedItem = medicareMapping.find((item) => item.id === parseInt(id));
  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div className='d-flex'>
        <SideBar />
        <div className='container'>
          <div className='container MainContainer'>
            <div className='row'>
              <div className='col-md-6  ReadContainer'>
                <div className='item1'>
                  <img src={selectedItem.image} className='img-fluid MainImage' alt='Selected Item' />
                </div>
              </div>
              <div className='col-md-6 ReadContainer1'>
                <div className='item2  p-1'>
                  <p className='card-title para1' style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>{selectedItem.card_title}
                  </p>
                  <p className='card-text  para3'>The sun cast a warm glow over the tranquil meadow, painting the tall grass in shades of gold. A gentle breeze rustled the leaves of the ancient oak tree standing proudly at the edge of the clearing.
                    Birds chirped melodiously, their songs weaving through the air like delicate threads. In this idyllic scene, time seemed to slow, allowing for a moment of pure serenity amidst the chaos of the world. Here, in nature's embrace, worries faded away, replaced by a sense of peace and harmony.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReadMore;
