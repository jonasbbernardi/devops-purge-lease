const buildsApi = require('./builds-api');
const leasesApi = require('./leases-api');

module.exports = {
  ...buildsApi,
  ...leasesApi,
}