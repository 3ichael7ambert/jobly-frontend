import React, { useState, useEffect } from 'react';
import './CompanyList.css';
import { Link } from 'react-router-dom';
import { getCompanies, searchCompanies } from './api'; 

const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        if (searchTerm) {
          const searchResults = await searchCompanies(searchTerm);
          setCompanies(searchResults.company); 
        } else {
          const companyList = await getCompanies();
          setCompanies(companyList);
        }
      } catch (error) {
        console.error('Error fetching companies:', error.message);
      }
    };
  
    fetchCompanies();
  }, [searchTerm]);
  

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // You can perform additional actions on search if needed
    console.log('Performing search:', searchTerm);
  };

  return (
    <div>
      <h2>Company List</h2>
      <div>
        <input
          type="text"
          placeholder="Search companies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul className="CompanyList">
        {companies && companies.map((company) => (
           <Link to={`/companies/${company.handle}`} className="CompanyLink">
          <li className="CompanyCard" key={company.handle}>
           
            <strong>{company.name}</strong>
            <p>{company.description}</p>
        
            {/* other details */}
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
