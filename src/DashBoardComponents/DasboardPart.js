import React from 'react';
import url1 from '../Assets/3359081.png';
import url2 from '../Assets/staff-icon-glyph-style-flat-260nw-464183522.webp';
import url3 from '../Assets/png-transparent-dollar-sign-illustration-united-states-dollar-icon-design-icon-dollar-sign-text-logo-number.png';
import url4 from '../Assets/png-transparent-delivery-computer-icons-truck-logistics-delivery-angle-freight-transport-text.png';
import '../StylingDashBoard/CardComponent.css';
const DashboardPart = ()=>{
    const CardsData = [
        {
            id: 1,
            url: url1,
            score: "3,453",
            string: "Total Patients"
        },
        {
            id: 2,
            url: url2,
            score: "3940",
            string: "Total Staff" // Corrected typo
        },
        {
            id: 3,
            url: url3,
            score: "3,556",
            string: "Total Dollars" // Example string, change according to actual context
        },
        {
            id: 4,
            url: url4,
            score: "4,200",
            string: "Available Cars" // Corrected typo
        }
    ];
    return(
        <>
        <div className='d-flex flexContainer' style={{columnGap:"43px"}}>
          {
            CardsData.map((CardData)=>{
                return(
                    <div key={CardData.id} className='card customCard1Component'>
                        <div className='card-body d-flex items'>
                            <img src={CardData.url} className='card-img-top customCardBody' alt='Card Body'/>
                            <h6 className='card-title' style={{ fontSize: "14px", marginTop: "10px", marginLeft: "20px" }}>{CardData.score}</h6>
                            <span className='card-text' style={{ fontSize: "12px", marginBottom: "5px", marginTop: "30px", fontFamily: "loboto" }}>{CardData.string}</span>
                        </div>
                    </div>
                )
            })
          }
          </div>
        </>
    );
}
export default DashboardPart;