/**
 * User2Controller
 *
 * @description :: Server-side logic for managing user2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	
privateprofile: function(req, res) {
	//req.privateprofile();
	res.view('public', {
		foo: 'private'
	})
},


publicprofile: function(req, res) {
	//req.publicprofile();
	res.view('public', {
		foo: 'pub'
	})
},



  login: function (req, res) {
    res.view();
  },

  dashboard: function (req, res) {
    res.view();
  },

  logout: function (req, res){
    req.session.user = null;
    req.session.flash = 'You have logged out';
    res.redirect('user/login');
  },

  'facebook': function (req, res, next) {
     passport.authenticate('facebook', { scope: ['email', 'user_about_me']},
        function (err, user) {
            req.logIn(user, function (err) {
            if(err) {
                req.session.flash = 'There was an error';
                res.redirect('user2/login');
            } else {
                req.session.user = user;
                res.redirect('/user2/dashboard');
            }
        });
    })(req, res, next);
  },

  'facebook/callback': function (req, res, next) {
     passport.authenticate('facebook',
        function (req, res) {
            res.redirect('/user/dashboard');
        })(req, res, next);
  }

};




