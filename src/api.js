import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const api = axios.create({
  baseURL: BASE_URL,
});

const request = async (endpoint, data = {}, method = "get", token) => {
  console.debug("API Call:", endpoint, data, method);

  const headers = { Authorization: `Bearer ${token}` };

  try {
    return (await api({ url: endpoint, method, data, headers })).data;
  } catch (err) {
    console.error("API Error:", err.response);
    let message = err.response.data.error.message;
    throw Array.isArray(message) ? message : [message];
  }
};


const getCompany = async (handle, token) => {
  let res = await request(`companies/${handle}`, {}, "get", token);
  return res.company;
};

const getCompanies = async (token) => {
  let res = await request('companies', {}, "get", token);
  return res.companies;
};

const searchCompanies = async (searchTerm, token) => {
  let res = await request(`companies/${searchTerm}`, {}, "get", token);
  return res.companies || [];
};




const getJobs = async (token) => {
  let res = await request('jobs', {}, "get", token);
  return res.jobs;
};

const searchJobs = async (searchTerm, token) => {
  let res = await request(`jobs/${searchTerm}`, {}, "get", token);
  return res.jobs || [];
};

const loginUser = async (username, password) => {
  let res = await request('auth/token', { username, password }, 'post');
  return res.token;
};

const registerUser = async (userData) => {
  let res = await request('auth/register', userData, 'post');
  return res.token;
};

const getJob = async (id, token) => {
  let res = await request(`jobs/${id}`, {}, "get", token);
  return res.job;
};

const updateProfile = async (userData, token) => {
  let res = await request('profile', userData, 'patch', token);
  return res.user;
};

export { getCompany, getCompanies, getJobs, getJob, loginUser, registerUser, updateProfile, searchCompanies,searchJobs };