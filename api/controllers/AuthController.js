/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {

    // _config: {
    //     actions: false,
    //     shortcuts: false,
    //     rest: false
    // },

    login: function(req, res) {

        passport.authenticate('local', function(err, user, info) {
            if ((err) || (!user)) {
                return res.send({
                    message: info.message,
                    user: user
                });
            }
            req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.send({
                    message: info.message,
                    user: user
                });
            });

        })(req, res);
    },

    // https://developers.facebook.com/docs/
  // https://developers.facebook.com/docs/reference/login/
  'facebook': function (req, res, next) {
     passport.authenticate('facebook', { scope: ['email', 'user_about_me']},
        function (err, user) {
            req.logIn(user, function (err) {
            if(err) {
                console.log(err);
                req.session.flash = 'There was an error';
                res.view('500');
            } else {
                req.session.user = user;
                res.redirect('/fbkreturn');
            }
        });
    })(req, res, next);
  },

  'facebook/callback': function (req, res, next) {
     passport.authenticate('facebook',
        function (req, res) {
            res.redirect('/user2');
        })(req, res, next);
  },

    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};



