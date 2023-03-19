import { useState, useEffect } from 'react'

import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './component/Signin';
import Signup from './component/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home';
import { auth } from './config/free'
function App() {

  const [userName, setUserName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName('');
    });
  }, []);

  return (
    <div className="App">
      {/* <h1>New content</h1> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={userName} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
