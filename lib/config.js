//File with configurations and secrets

//The config module
const config = {
  mongodb: {
    user: {
      name: process.env.mongodbUsername,
      password: process.env.mongodbPassword
    },
    domain: process.env.mongodbDomain
  }
};

//Export the module
module.exports = config;
