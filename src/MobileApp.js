// MobileApp.js
import React, { useState } from 'react';
 // You can create a separate CSS file for mobile styles
import errorIcon from '../src/icon-error.svg';
import './mobile.css';

function MobileApp() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  const myBtnStyle = {
    backgroundColor: 'lightgreen',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '20px',
    width:'100%',
    borderRadius: '10px',
    fontSize: '1.2rem'
  };

  const inputStyles = {
    name: {
      marginBottom: '40px',
      outlineColor: focusedInput === 'name' ? 'red' : 'initial',
    },
    lastname: {
      marginBottom: '40px',
      outlineColor: focusedInput === 'lastname' ? 'red' : 'initial',
    },
    email: {
      marginBottom: '40px',
      outlineColor: focusedInput === 'email' ? 'red' : 'initial',
    },
    password: {
      marginBottom: '40px',
      outlineColor: focusedInput === 'password' ? 'red' : 'initial',
    },
  };

  //1. Event handler for input changes
  const handleChange = (e, inputName) => {
    // Use the inputName to determine which state to update(creating input names)
    switch (inputName) {
      case 'name':
        setName(e.target.value);
        break;
      case 'lastname':
        setLastname(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
/*The functiom setFocused input is created to target the specific imput via inputname parameter and the the cutrrent state must be called in the
styling focusedInput === 'email' ? 'red' : 'initial', This function is just to target the input based on the input name(targetted input)  that input is styled in
the inputStyles variable by calling the current state setting equal to the input name and applying the  styles.*/
  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div className="MobileApp">
      <div className='left-mobile'>
      <h1>Learn to code by<br/> watching others</h1>
      <p style={{fontSize: '1.2rem'}}>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div className='right-mobile'>
      <button className="button-up-mobile">Try it free 7 days then $20/mo. thereafter</button>
      <form>
        <input
          type='text'
          placeholder='Provide your Name'
          value={name}
          onChange={(e) => handleChange(e, 'name')}
          onFocus={() => handleInputFocus('name')}
          onBlur={handleInputBlur}
          style={inputStyles.name}
        />
        {focusedInput === 'name' && <img style={{ position: 'relative', left: '140px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
        {focusedInput === 'name' && <label style={{ position: 'relative', top: "-50px", left: "70px", color:'red' }}>Name cannot be empty</label>}

        <input
          type='text'
          placeholder='Provide your Last Name'
          value={lastname}
          onChange={(e) => handleChange(e, 'lastname')}
          onFocus={() => handleInputFocus('lastname')}
          onBlur={handleInputBlur}
          style={inputStyles.lastname}
        />
        {focusedInput === 'lastname' && <img style={{ position: 'relative', left: '140px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
        {focusedInput === 'lastname' && <label style={{ position: 'relative', top: "-50px", left: "70px", color:'red' }}>Name cannot be empty</label>}
        
        <input
          type='text'
          placeholder='Provide your Name'
          value={email}
          onChange={(e) => handleChange(e, 'email')}
          onFocus={() => handleInputFocus('email')}
          onBlur={handleInputBlur}
          style={inputStyles.email}
        />
          {focusedInput === 'email' && <img style={{ position: 'relative', left: '140px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
          {focusedInput === 'email' && <label style={{ position: 'relative', top: "-50px", left: "70px", color:'red' }}>Name cannot be empty</label>}

        
        <input
          type='text'
          placeholder='Provide your Name'
          value={password}
          onChange={(e) => handleChange(e, 'password')}
          onFocus={() => handleInputFocus('password')}
          onBlur={handleInputBlur}
          style={inputStyles.password}
        />
          {focusedInput === 'password' && <img style={{ position: 'relative', left: '140px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
          {focusedInput === 'password' && <label style={{ position: 'relative', top: "-50px", left: "70px", color:'red' }}>Name cannot be empty</label>}

        

        {/* Repeat similar patterns for other input fields if needed */}

        <button style={myBtnStyle}>Claim your free trial</button>
        <p style={{color:'gray', fontSize:'0.6rem'}}>By clicking the button, you are agreeing to our Terms and Services</p>
      </form>
      </div>
    </div>
  );
}

export default MobileApp;
