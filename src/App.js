// Importing necessary dependencies
import React, { useState } from 'react';
import './index.css';  // Importing the styles for the component
import errorIcon from '../src/icon-error.svg';  // Importing the error icon
import MobileApp from './MobileApp';  // Importing the mobile version component

// Main component for the desktop version
function App() {
  // Step 1 of 1 State variables to store the input values and the currently focused input
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);

  // Checking if the screen width is less than or equal to 768 pixels
  const isMobile = window.innerWidth <= 420;

  // Styling for the submit button
  const myBtnStyle = {
    backgroundColor: 'lightgreen',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  };

  //3. Styling for each input based on whether it's focused or not
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

  /*2 Event handler for input focus determinated by the inputName(currentstate)We gotta have the current state value extracterd in for of case 'name' with the swich statement and then create
  setFocus function for that current state (inputName) parameter. Then when the focus input is set for each current state we style each input based on the imput name  */

  const handleInputFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  //4. Event handler for input blur
  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  // JSX structure for the component
  return (
    <div className="App">
      {/* Conditionally rendering the mobile version if the screen width is less than or equal to 768 pixels */}
      {isMobile ? (
        <MobileApp />
      ) : (
        <>
          {/* Desktop version structure */}
          <div className="left">
            <h1 style={{ fontSize: '4rem', textAlign: 'left' }}>Learn to code by<br /> watching others</h1>
            <p style={{ fontSize: '1.5rem', textAlign: 'left' }}>See how experienced developers solve problems in real-time.<br /> Watching scripted tutorials is great, but understanding how<br /> developers think is invaluable.</p>
          </div>
          <div className="right">
            <button className="button-up">Try it free 7 days then $20/mo. thereafter</button>
            <div className="form">
              <form>
                {/* Input for Name */}
                <input
                  type='text'
                  placeholder='Provide your Name'
                  value={name}
                  onChange={(e) => handleChange(e, 'name')}
                  onFocus={() => handleInputFocus('name')}
                  onBlur={handleInputBlur}
                  style={inputStyles.name}
                />
                {/* Error icon and message for Name input */}
                {focusedInput === 'name' && <img style={{ position: 'relative', left: '190px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
                {focusedInput === 'name' && <label style={{ position: 'relative', top: "-30px", left: "140px" }}>Name cannot be empty</label>}

                {/* Repeat the pattern for Last Name, Email, and Password inputs */}
                {/* Input for Last Name */}
                <input
                  type='text'
                  placeholder='Provide your Last Name'
                  value={lastname}
                  onChange={(e) => handleChange(e, 'lastname')}
                  onFocus={() => handleInputFocus('lastname')}
                  onBlur={handleInputBlur}
                  style={inputStyles.lastname}
                />
                {/* Error icon and message for Last Name input */}
                {focusedInput === 'lastname' && <img style={{ position: 'relative', left: '190px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
                {focusedInput === 'lastname' && <label style={{ position: 'relative', top: "-30px", left: "140px" }}>Last Name cannot be empty</label>}

                {/* Input for Email */}
                <input
                  type='text'
                  placeholder='Provide your Email'
                  value={email}
                  onChange={(e) => handleChange(e, 'email')}
                  onFocus={() => handleInputFocus('email')}
                  onBlur={handleInputBlur}
                  style={inputStyles.email}
                />
                {/* Error icon and message for Email input */}
                {focusedInput === 'email' && <img style={{ position: 'relative', left: '190px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
                {focusedInput === 'email' && <label style={{ position: 'relative', top: "-30px", left: "140px" }}>Email cannot be empty</label>}

                {/* Input for Password */}
                <input
                  type='password'
                  placeholder='Enter your Password'
                  value={password}
                  onChange={(e) => handleChange(e, 'password')}
                  onFocus={() => handleInputFocus('password')}
                  onBlur={handleInputBlur}
                  style={inputStyles.password}
                />
                {/* Error icon and message for Password input */}
                {focusedInput === 'password' && <img style={{ position: 'relative', left: '190px', bottom: '80px' }} src={errorIcon} alt="Error icon" />}
                {focusedInput === 'password' && <label style={{ position: 'relative', top: "-30px", left: "140px" }}>Password cannot be empty</label>}

                {/* Submit button */}
                <button style={myBtnStyle}>Claim your free trial</button>
                {/* Terms and Services */}
                <p className='terms'>By clicking the button, you are agreeing to our Terms and Services</p>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
