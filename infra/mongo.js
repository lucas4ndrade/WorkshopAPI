const { default: mongoose } = require("mongoose");

const options = {
  minPoolSize: 0,
  maxPoolSize: 100,
  connectTimeoutMS: 5000,
  autoIndex: false,
};

function init() {
  // Create the database connection
  mongoose.connect("mongodb://localhost:27017/workshop-api", options);

  mongoose.connection.once('connected', () => {
    console.log('MONGOOSE CONNECTED')
  });


  mongoose.connection.on('error', (err) => {
    console.log(`FAILED TO CONNECT MONGOOSE, ${err.message}`)
  });
}

module.exports = {
  init,
};
