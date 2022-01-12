import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useState } from 'react';

import NoteState from './context/notes/NoteState';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  }
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>

        <div className="container">
          {<Routes>
            {<Route exact path="/" element={<Home showAlert={showAlert} />} />}
            {<Route exact path="/login" element={<Login showAlert={showAlert}/>} />}
            {<Route exact path="/signUp" element={<SignUp showAlert={showAlert}/>} />}


          </Routes>}
        </div>


      </NoteState>
    </>
  );
}

export default App;
