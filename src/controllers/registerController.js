const moment = require('moment');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const register = require('../models/register');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/register',{ useMongoClient: true });

export const saveData = (req, res, next) => {
  // Find all movies and return json response
   console.log('Content',req.body);
   const registerData = new register(req.body);
   registerData.save(function(err){
   // save() will run insert() command of MongoDB.
   // it will add new data in collection.
       if(err) {
           res.send({
             "error" : true,
             "message" :"Error adding data"
           });
       } else {
          res.send({
             "error" : false,
             "message" : "Data added"
           });
       }
   });
};
