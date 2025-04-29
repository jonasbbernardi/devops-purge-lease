const axios = require('axios');
const {getHeaders} = require('./headers');

const getAllBuilds = async () => {
    try {
        const params = { 
            "definitions": process.env.BUILD_DEFINITION_ID, 
            "statusFilter": "completed", 
            "api-version": "6.0" 
        };
        const url = `${process.env.BASE_API_URL}/build/builds`;
        const headers = getHeaders();
        const res = await axios.get(url, { headers, params });
        return res.data.value;
    } catch (error) {
        console.log(error.message)
    }
}

const getInfoMessage = async (build) => {
    let infoMessage = build?.triggerInfo['ci.message'];
    if(!infoMessage) {
        const headers = getHeaders();
        const sourceVersionDisplayUri = build?._links?.sourceVersionDisplayUri?.href;
        const sourceVersionDisplay = await axios.get(sourceVersionDisplayUri, {headers});
        infoMessage = sourceVersionDisplay?.data?.comment;
    }
    return infoMessage;
}

module.exports = {
    getAllBuilds,
    getInfoMessage
};