import React from 'react';
import '../StylingDashBoard/CardComponent2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBookMedical, faBrain, faHeart, faHome, faHospital, faLungs, faMedkit } from '@fortawesome/free-solid-svg-icons';

export const CardComponent2 = () => {
    const PatientsData = [
        {
            id:1,
            Name:"Division",
            score:"PT"
        },
        {
            id:2,
            Name:"Cardiology",
            score:"247"
        },
        {
            id:3,
            Name:"Neurology",
            score:"164"
        },
        {
            id:4,
            Name:"Gastrology",
            score:"860"
        },
        {
            id:5,
            Name:"Kidney",
            score:"860"
        },
        {
            id:6,
            Name:"Ambulance",
            score:"700"
        },
        {
            id:7,
            Name:"Bookmedical",
            score:"900"
        },
        {
            id:8,
            Name:"Hospital",
            score:"1000"
        }
        
    ];

    const geticonforPatientName = (name)=>{
        switch(name.toLowerCase()){
            case 'division':{
                return <FontAwesomeIcon icon={faHome}/>;
            }
            case 'cardiology':{
                return <FontAwesomeIcon icon={faHeart}/>;
            }
            case 'neurology':{
                return <FontAwesomeIcon icon={faBrain}/>;
            }
            case 'gastrology':{
                return <FontAwesomeIcon icon={faMedkit}/>
            }
            case 'kidney':{
                return <FontAwesomeIcon icon={faLungs}/>
            }
            case 'ambulance':{
                return <FontAwesomeIcon icon={faAmbulance}/>
            }
            case 'bookmedical':{
                return <FontAwesomeIcon icon={faBookMedical}/>
            }
            case 'hospital':{
                return <FontAwesomeIcon icon={faHospital}/>
            }
            default:{
                return null;
            }
        }
    }

    return (
        <div className='card patientCard'>
            <div className='card-body'>
                <span className='card-title' style={{fontFamily: "sans-serif", fontWeight: "bold"}}>Patients By Division</span>
                <hr/>
                <div className='scrollable'>
                    {PatientsData.map((patient) => (
                        <div key={patient.id} className='patient-item'>
                            <p className='icon text-success'>{geticonforPatientName(patient.Name)}</p>
                            <p className='name'>{patient.Name}</p>
                            <p className='score'>{patient.score}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
