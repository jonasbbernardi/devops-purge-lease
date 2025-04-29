const axios = require('axios');
const {getHeaders} = require('./headers');

const getBuildLeases = async (buildID) => {
  const params = {'api-version': '7.1-preview.1'}
  const url = `${process.env.BASE_API_URL}/build/builds/${buildID}/leases`;
  const headers = getHeaders();
  const res = await axios.get(url, { headers, params });
  return res.data.value;
}

const deleteBuildLease = async (leaseID) => {
  const params = {'api-version': '6.1-preview.1'}
  const url = `${process.env.BASE_API_URL}/build/retention/leases?ids=${leaseID}`;
  const headers = getHeaders();
  return await axios.delete(url, { headers, params });
}

module.exports = {
  getBuildLeases,
  deleteBuildLease,
};