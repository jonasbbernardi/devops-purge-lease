const getHeaders = () => {
  const username = process.env.USERNAME;
  const pat = process.env.AZDO_PERSONAL_ACCESS_TOKEN
  const token = Buffer.from(`${username}:${pat}`).toString('base64');
  return {Authorization: `Basic ${token}`};
}

module.exports = {getHeaders};