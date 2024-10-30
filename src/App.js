import React from 'react';
import Login from './Login';
import Sign from './Sign';
import Home from './Home';
import Header from './Header';
import AssessmentPage from './Assign';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnlineCourses from './OnlineCourses';
import Payments from './Payments';
import CoPlat from './CoPlat';
import Profile from './Profile';
import Progress from './Progress';
import Verify from './Verify';
import Download from './Download';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/sign' element={<Sign/>} />
          <Route exact path='/assessment' element={<AssessmentPage/>} />
          <Route exact path='/onlinecourses' element={<OnlineCourses/>} />
          <Route exact path='/payments' element={<Payments/>} />
          <Route exact path='/codingplatform' element={<CoPlat/>} />
          <Route exact path='/profile' element={<Profile/>} />
          <Route exact path='/progress' element={<Progress/>} />
          <Route exact path='/certificate/verify' element={<Verify/>} />
          <Route exact path='/certificate/download' element={<Download/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
