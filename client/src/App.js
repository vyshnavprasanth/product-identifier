
import './App.css';
import { useState } from 'react';
import { loginContext } from './store/LoginContext';
import { signupContext } from './store/SignupContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);

  // Define the update functions
  const updateLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };
  const updateSignupPopup = () => {
    setSignupPopup(!signupPopup);
  };


  return (
    <div className="App">
      <loginContext.Provider value={{ loginPopup, updateLoginPopup }}>
        <signupContext.Provider value={{ signupPopup, updateSignupPopup }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/login' element={<LogIn main={true} />} />
              <Route path='/signup' element={<Signup main={true} />} />
            </Routes>
          </Router>
        </signupContext.Provider>
      </loginContext.Provider>
    </div>
  );
}

export default App;
