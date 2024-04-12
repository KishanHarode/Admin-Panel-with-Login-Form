import React from 'react';
import Medicare1 from '../Assets/IMG_20240324_092334.jpg';
import '../StylingDashBoard/MedicareMeter.css';
const MedicareMeter = (props)=>{
    return(
        <>
            <div className='card customCard' style={{backgroundImage:`url(${Medicare1})`}}>
                 <div className='card-body'>
                    <span className='card-title customSpan'>2,948</span>
                    <span className='card-title customSpan1'>Patients this month</span>
                 </div>
            </div>
        </>
    );
}
export default MedicareMeter;