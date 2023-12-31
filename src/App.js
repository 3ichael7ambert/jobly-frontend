import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './App.css';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail'; 
import JobList from './JobList';
import JobDetail from './JobDetail'; 
import Profile from './Profile'; 
import Login from './Login';
import Register from './Register';

const App = () => {
  return (
    <Router>
      <div>

        <nav>
        <h1>
          <NavLink to="/" className="logo-link">
            JOBLY
          </NavLink>
       </h1>
          <ul>
            <li>
              <NavLink to="/companies">Companies</NavLink>
            </li>
            <li>
              <NavLink to="/jobs">Jobs</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>




          </ul>
        </nav>

        <Routes>
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs/:handle" element={<JobDetail />} />
          <Route path="/companies/:id" element={<CompanyDetail />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/jobs" element={<JobList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<div className="centered-content"><h2>Welcome to Jobly!</h2></div>} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;
