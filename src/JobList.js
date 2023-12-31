import React, { useState, useEffect } from 'react';
import { getJobs, searchJobs } from './api';
import { Link } from 'react-router-dom';
import './JobList.css';

const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        if (searchTerm) {
          // If there's a search term, perform a search
          const searchResults = await searchJobs(searchTerm);
          setJobs(searchResults);
        } else {
          // If no search term, fetch all jobs
          const jobList = await getJobs();
          setJobs(jobList);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error.message);
      }
    };

    fetchJobs();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h2>Job List</h2>
      <input
        type="text"
        placeholder="Search jobs"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="JobList">
        {jobs.map((job) => (
          <Link to={`/jobs/${job.id}`} className="CompanyLink">
          <li className="JobCard" key={job.id}>
            <strong>{job.title}</strong>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {/* Placeholder for other details */}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
