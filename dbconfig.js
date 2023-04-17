//MongoDB connection
const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://admin:admin@cluster0.bwv5e2o.mongodb.net/costumerDb?retryWrites=true&w=majority";
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.on('connection', (stream) => {console.log(`Connected to ${stream}`)})
module.exports = mongoose;