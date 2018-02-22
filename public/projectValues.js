
module.exports = {
     server_port: process.env.OPENSHIFT_NODEJS_PORT || 3000, // for publishing in openshift
     server_ip_address: process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1' // for publishing in openshift

};

