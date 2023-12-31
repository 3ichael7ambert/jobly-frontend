
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCompany } from './api';

const CompanyDetail = () => {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const companyData = await getCompany(handle);
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching company details:', error.message);
      }
    };

    fetchCompany();
  }, [handle]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{company.name}</h2>
      <p>{company.description}</p>
      {/* Display other details */}
    </div>
  );
};

export default CompanyDetail;