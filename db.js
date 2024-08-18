// It help to connect the database file with node js 
const mongoose = require('mongoose');//mongoose export

//Define the mongodb URL
const mongoURL = 'mongodb://localhost:27017/hotels'//here hotels is database name.

//set up mongoDB connection
mongoose.connect(mongoURL, {
   //useNewUrlParser: true,
   //useUnifiedTopology: true
})

const db = mongoose.connection;

//Define Event Listener which help to give message when connection is  establish
db.on('connected', () => {
   console.log('server is connected');
});

db.on('error', (err) => {
   console.log('Error Occur');
});

db.on('disconnected', () => {
   console.log("server is disconnected");
});

//Export the database connection on server.jason

module.exports = db;