import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getJob } from './api';

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        console.log('Fetching job details for ID:', id); // Log the ID to the console
        const jobData = await getJob(id);
        console.log('Job details:', jobData); // Log the job details to the console
        setJob(jobData);
      } catch (error) {
        console.error('Error fetching job details:', error.message);
        setError(error.message);
      }
    };

    fetchJob();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      {/* other details */}
    </div>
  );
};

export default JobDetail;
