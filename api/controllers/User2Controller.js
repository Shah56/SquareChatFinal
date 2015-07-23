/**
 * User2Controller
 *
 * @description :: Server-side logic for managing user2s
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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
}

};

