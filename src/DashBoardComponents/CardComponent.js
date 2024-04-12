import React from 'react';

import TimeAdmitted from './TimeAdmitted';
import {CardComponent2} from './CardComponent2'; 
import MedicareMeter from './MedicareMeter';
import '../StylingDashBoard/CardComponent.css';
import DashboardPart from './DasboardPart';

const CardComponent = () => {
    return (
        <>
           <div className='container container1 p-1 d-flex flex-wrap' style={{rowGap:"10px",boxSizing:"border-box",padding:"10px",justifyContent:"space-evenly"}}>
              <TimeAdmitted/>
              <CardComponent2/>
              <MedicareMeter/>
              <DashboardPart/>
           </div>
        
        </>
    );
};

export default CardComponent;
