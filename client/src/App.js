
import './App.css';
import { useState } from 'react';
import { loginContext } from './store/LoginContext';
import { signupContext } from './store/SignupContext';
import { addProductContext} from './store/ProductContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';
import AddProduct from './Pages/AddProduct';

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [addProductPopup, setAddProductPopup] = useState(false)


  // Define the update functions
  const updateLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };
  const updateSignupPopup = () => {console.log("in");
    setSignupPopup(!signupPopup);
  };
  const updateAddProductPopup = () =>{
    console.log("status"+setAddProductPopup);
    setAddProductPopup(!addProductPopup)
  }


  return (
    <div className="App">
      <loginContext.Provider value={{ loginPopup, updateLoginPopup }}>
        <signupContext.Provider value={{ signupPopup, updateSignupPopup }}>
          <addProductContext.Provider value={{addProductPopup,updateAddProductPopup }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/login' element={<LogIn main={true} />} />
              <Route path='/signup' element={<Signup main={true} />} />
              <Route path='/add-product' element={<AddProduct />} />
            </Routes>
          </Router>
          </addProductContext.Provider>
        </signupContext.Provider>
      </loginContext.Provider>
    </div>
  );
}

export default App;
