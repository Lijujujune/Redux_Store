const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://juneli:MongoDB123@cluster0.hsltb.mongodb.net")

module.exports = mongoose.connection;
