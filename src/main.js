require('dotenv').config();
const api = require('./devops');

async function init() {

    const builds = await api.getAllBuilds();
    const apiCalls = [];

    for(const build of builds) {
        const leases = await api.getBuildLeases(build.id);

        for(const lease of leases) {

            if( !!lease.protectPipeline ){
                const infoMessage = await api.getInfoMessage(build);
                console.log(`${build.buildNumber}:`, infoMessage);
                apiCalls.push(api.deleteBuildLease(lease.leaseId));
            }

        }

    }
    await Promise.all(apiCalls);
}

init()