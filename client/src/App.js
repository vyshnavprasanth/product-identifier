
import './App.css';
import { useState } from 'react';
import { loginContext } from './store/LoginContext';
import { signupContext } from './store/SignupContext';
import { addProductContext,editProductContext} from './store/ProductContext';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LogIn from './Pages/LogIn';
import Signup from './Pages/Signup';
import AddProduct from './Pages/AddProduct';

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [addProductPopup, setAddProductPopup] = useState(false)
  const [editProductPopup, setEditProductPopup] = useState(false)

  // Define the update functions
  const updateLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };
  const updateSignupPopup = () => {
    setSignupPopup(!signupPopup);
  };
  const updateAddProductPopup = () =>{
    setAddProductPopup(!addProductPopup)
  }
  const updateEditProductPopup = () =>{
    setEditProductPopup(!editProductPopup)
  }

  return (
    <div className="App">
      <loginContext.Provider value={{ loginPopup, updateLoginPopup }}>
        <signupContext.Provider value={{ signupPopup, updateSignupPopup }}>
          <addProductContext.Provider value={{addProductPopup,updateAddProductPopup }}>
          <editProductContext.Provider value ={{editProductPopup,updateEditProductPopup}}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path='/login' element={<LogIn main={true} />} />
              <Route path='/signup' element={<Signup main={true} />} />
              <Route path='/add-product' element={<AddProduct />} />
            </Routes>
          </Router>
          </editProductContext.Provider>
          </addProductContext.Provider>
        </signupContext.Provider>
      </loginContext.Provider>
    </div>
  );
}

export default App;
