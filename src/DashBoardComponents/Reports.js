import React, { useState } from 'react';
import Header from './Header';
import { SideBar } from './SideBar';
import Footer from './Footer';
import '../StylingDashBoard/Reports.css';
import { useNavigate } from 'react-router-dom';

const Reports = () => {
  const [PatientName, setPatientName] = useState('');
  const [Age, setAge] = useState('');
  const [Gender, setGender] = useState('');
  const [BloodType, setBloodType] = useState('');
  const [Diagnosis, setDiagnosis] = useState('');
  const [date, setDate] = useState('');
  const [Treatment, setTreatment] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validation = () => {
    let isValid = true;
    const newErrors = {};
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (!PatientName.trim()) {
      newErrors.PatientName = "Patient Name is Required";
      isValid = false;
    }
    else if (!nameRegex.test(PatientName.trim())) {
      newErrors.PatientName = "Invalid Name";
      isValid = false;
    }

    if (!Age.trim()) {
      newErrors.Age = "Age is Required";
      isValid = false;
    } else if (isNaN(Age) || Age <= 0 || Age > 100) {
      newErrors.Age = "Invalid Age";
      isValid = false;
    }

    if (!Gender.trim()) {
      newErrors.Gender = "Gender is Required";
      isValid = false;
    }

    if (!BloodType.trim()) {
      newErrors.BloodType = "Blood Type is Required";
      isValid = false;
    }

    if (!Diagnosis.trim()) {
      newErrors.Diagnosis = "Diagnosis is Required";
      isValid = false;
    }

    if (!date.trim()) {
      newErrors.date = "Date is Required";
      isValid = false;
    }

    if (!Treatment.trim()) {
      newErrors.Treatment = "Treatment is Required";
      isValid = false;
    }

    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 2000)
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'PatientName') {
      setPatientName(value);
    }
    else if (name === 'Age') {
      setAge(value);
    }
    else if (name === 'Gender') {
      setGender(value);
    }
    else if (name === 'BloodType') {
      setBloodType(value);
    }
    else if (name === 'Diagnosis') {
      setDiagnosis(value);
    }
    else if (name === 'date') {
      setDate(value);
    }
    else if (name === 'Treatment') {
      setTreatment(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validation()) {
      const submitData = { PatientName, Age, Gender, BloodType, Diagnosis, date, Treatment };
      setPatientName('');
      setAge('');
      setGender('');
      setBloodType('');
      setDiagnosis('');
      setDate('');
      setTreatment('');
      try {
        fetch(' http://localhost:3001/PatientData', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(submitData)
        })
          .then((res) => res.json())
          .then((json) => {
            console.log("Data Submitted Succesfully",json)
            setTimeout(() => {
              navigate('/users')
            }, 1000);
          })
      } catch (error) {
        console.warn("Data Submitting Error", error)
      }

    } else {
      console.log("Please fill in the data correctly");
    }
  };

  return (
    <>
      <div style={{ width: "100%" }}>
        <Header />
      </div>
      <div className='d-flex'>
        <SideBar />
        <div className="border border-danger" style={{ display: "flex", flexWrap: "wrap", padding: "10px", width: "100%" }}>
          <div className='container-fluid p-1' style={{ padding: "0px", fontFamily: "Arial, sans-serif", borderTop: "5px solid #28a745" }}>
            <div className='heading'>
              <h5 className='card-title fontheading1' style={{ fontFamily: 'sans-serif', padding: "5px" }}> User Registration</h5>
            </div>
            <div className='mb-3'>
              <span className='text-center hint-text fontheading2' style={{ fontSize: "13px", fontFamily: "sans-serif", color: "#999" }}>Create Your Account. It's free and only takes a minute</span>
            </div>
            <div className="container  FormContainer" style={{ maxWidth: "100%" }}>
              <div className='card-body  MainFormBody'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <div className='row  inputContainer1' style={{ marginBottom: "30px" }}>
                      <div className='input1' style={{ width: "32%", marginRight: "10px" }}>
                        <input  type='text' name='PatientName' placeholder='Patient Name' value={PatientName} onChange={handleChange} className={`form-control ${errors.PatientName ? 'is-invalid border-danger' : ''} patientInput`} />
                        <span className='error-message error1'>{errors.PatientName}</span>
                      </div>
                      <div className='input2 ' style={{ width: "32%", marginRight: "10px" }}>
                        <input type='text' name='Age' placeholder='Enter Age' value={Age} onChange={handleChange} className={`form-control ${errors.Age ? 'is-invalid border-danger' : ''} ageInput`} />
                        <span className='error-message error2'>{errors.Age}</span>
                      </div>
                      <div className='input3 ' style={{ width: "32%", marginRight: "10px" }}>
                        <select value={Gender} onChange={handleChange} className={`form-control ${errors.Gender ? 'is-invalid border-danger' : ''} genderInput`} name='Gender'>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Others">Others</option>
                        </select>
                        <span className='error-message error3'>{errors.Gender}</span>
                      </div>
                    </div>
                    <div className='row inputContainer2' style={{ marginBottom: "30px" }}>
                      <div className='input3 ' style={{ width: "32%", marginRight: "10px" }}>
                        <select value={BloodType} onChange={handleChange} className={`form-control ${errors.BloodType ? 'is-invalid border-danger' : ''} bloodTypeInput`} name='BloodType'>
                          <option value="">Select Blood Type</option>
                          <option value="A+">A+</option>
                          <option value="B+">B+</option>
                          <option value="AB+">AB+</option>
                          <option value="A-">A-</option>
                          <option value="B-">B-</option>
                          <option value="O">O</option>
                        </select>
                        <span className='error-message error4'>{errors.BloodType}</span>
                      </div>
                      <div className='input4' style={{ width: "32%", marginRight: "10px" }}>
                        <select value={Diagnosis} onChange={handleChange} className={`form-control ${errors.Diagnosis ? 'is-invalid border-danger' : ''} diagnosisInput`} name='Diagnosis'>
                          <option value="">Select Diagnosis</option>
                          <option value="Hypertension">Hypertension</option>
                          <option value="Type 2 Diabetes">Type 2 Diabetes</option>
                          <option value="Migraine">Migraine</option>
                          <option value="Asthma">Asthma</option>
                          <option value="High Colestrol">High Colestrol</option>
                          <option value="Anxiety">Anxiety</option>
                          <option value="Arthritis">Arthritis</option>
                          <option value="Seasonal Allergies">Seasonal Allergies</option>
                        </select>
                        <span className='error-message error5'>{errors.Diagnosis}</span>
                      </div>
                      <div className='input4' style={{ width: "32%", marginRight: "10px" }}>
                        <input type='date' value={date} onChange={handleChange} className={`form-control ${errors.date ? 'is-invalid border-danger' : ''} dateInput`} placeholder='Enter Date' name='date' />
                        <span className='error-message error6'>{errors.date}</span>
                      </div>
                    </div>
                    <div className='row inputContainer2' style={{ marginBottom: "30px" }}>
                      <div className='input4' style={{ width: "98%", marginRight: "10px" }}>
                        <textarea value={Treatment} onChange={handleChange} className={`form-control ${errors.Treatment ? 'is-invalid border-danger' : ''} textareaInput`} rows='3' placeholder='Enter Treatment' style={{ resize: "none" }} name='Treatment' />
                        <span className='error-message' style={{ position: 'absolute', left: "250px" }}>{errors.Treatment}</span>
                      </div>
                    </div>
                   
                    <div className='mb-2'>
                      <button className='btn btn-outline-success'>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reports;
