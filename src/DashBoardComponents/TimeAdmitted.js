import React from 'react';
import '../StylingDashBoard/TimeAdmitted.css';
import barChart from '../Assets/Picsart_24-03-23_18-22-23-608.png';


const TimeAdmitted = () => {
    return (
        <div className="card p-1 customTimeAdmitted">
            <div className="card-body">
                <span className="card-title spanTimeAdmitted">Time Admitted</span>
                <div className='imgTimeAdmitted'>
                    <img src={barChart} alt="Bar Chart" className='imgTimeAdmitted1'/>
                </div>
            </div>
        </div>
    );
}

export default TimeAdmitted;
