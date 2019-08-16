'use strict';

module.exports = function(app) {
var porfile = require('../controllers/profileController');

app.route('/profile')
	.get(porfile.get_all)
	.post(porfile.post_all);

app.route('/profile/education')
	.get(porfile.get_education)
	.post(porfile.post_education)
	.delete(porfile.del_education);

app.route('/profile/education/:edu_index')
	.get(porfile.get_education_byindex)
	.put(porfile.put_education_byindex)
	.delete(porfile.del_education_byindex);

app.route('/profile/name')
	.get(porfile.get_name)
	.put(porfile.put_name);

};