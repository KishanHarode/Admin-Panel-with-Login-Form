import React, { useState } from 'react';
import '../StylingDashBoard/Login.css';
import Environment from '../Assets/blurred-landscape-of-vibrant-spring-greenery-and-blue-sky-a-universal-texture-for-your-design-vision-powerpoint-background_0b399436d1__960_540.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Username, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [failed,setFailed] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateLogin = () => {
    let isValid = true;
    const newErrors = {};
    const Username1 = "KishanHarode123";
    const Password2 = "Oriented@4810";

    if (!Username.trim()) {
      newErrors.Username = "Username is required";
      isValid = false;
    } else if (Username !== Username1) {
      newErrors.Username = "Invalid username";
      isValid = false;
    }

    if (!Password.trim()) {
      newErrors.Password = "Password is required";
      isValid = false;
    } else if (Password !== Password2) {
      newErrors.Password = "Invalid password";
      isValid = false;
    }

    if (!check) {
      newErrors.check = "Please check the checkbox";
      isValid = false;
    }

    setErrors(newErrors);
    setTimeout(() => {
      setErrors({});
    }, 1000);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log("Successfully authenticated");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(true);
        navigate('/dashboard');
      }, 1000)

    } else {
      console.log("Please fill in the username and password properly");
      setFailed(true);
      setTimeout(()=>{
        setFailed(false);
        navigate('/');
      },1000)
    }
  };

  const Toggle = ()=>{
    setShowPassword((prevPassword)=>{
        return !prevPassword;
    })
  }

  return (
    <>
    
      <div className='login-container ' style={{ backgroundImage: `url(${Environment})`}}>
        {success && <div className='boxSuccess postionSuccess'>Successfully Login</div>}
        {failed && <div className='boxDanger postionSuccess'>Invalid Credential</div>}
        <div className='container  p-3 mt-5  '>
          <div className='row p-3 formContainer mt-0'>
            <div className='item-1 p-2 mb-3 '>
              <span className='customFont'>LOGIN FORM</span>
            </div>
            <div className='item-2'>
              <form onSubmit={handleLogin} className='needs-validation' noValidate>
                <div className='mb-4'>
                  <FontAwesomeIcon icon={faUser} className='fauserPosition' />
                  <input type='text' name='Username' placeholder='Enter Username' className={`input-field form-control ${errors.Username ? 'is-invalid' : ''}`} value={Username} onChange={(e) => setUserName(e.target.value)} />
                  
                </div>
                <div className='mb-4'>
                  <FontAwesomeIcon icon={faLock} className='falockPosition' />
                  <input type={showPassword ? "text":"password"} name='Password' placeholder='Enter Password' className={`input-field form-control ${errors.Password ? 'is-invalid' : ''}`} value={Password} onChange={(e) => setPassword(e.target.value)} />
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className='faeyePosition' onClick={()=>Toggle()}/>
                </div>
                <div className='mb-3'>
                  <input type='checkbox' checked={check} onChange={(e) => setCheck(e.target.checked)} /> Remember Me
                </div>
                {errors.check && <div className='invalid-feedback'>{errors.check}</div>}
                <div>
                  <button type='submit' className='btn btn-success customButton'>Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
