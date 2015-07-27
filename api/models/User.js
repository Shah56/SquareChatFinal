/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt-nodejs');

module.exports = {
 attributes: {
    provider: 'STRING',
    uid: 'STRING',
    name: 'STRING',
    email: 'STRING',
    firstname: 'STRING',
    lastname: 'STRING'
  }


   // beforeCreate: function(user, cb, pr) {
  //   bcrypt.genSalt(10, function(err, salt) {
  //     console.log(salt);
  //     bcrypt.hash(user.password, salt, null,
  //       function(err, hash) {
  //         if (err) {
  //           console.log(err);
  //           cb(err);
  //         } else {
  //           user.password = hash;
  //           cb();
  //         }
  //       });

  //   });
  // }
};
