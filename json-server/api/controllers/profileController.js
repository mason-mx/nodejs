'use strict';

var profile = require('../models/profile');
var education = require('../models/education');
var tertiary = require('../models/tertiary');

var example = new profile('Joe', 'joe@example.com');
var example_highschool = new education('2007-09', '2010-07', 'Takapuna', 'intermediate');
var example_master = new tertiary('2010-09', '2013-07', 'AUT');
example_master.setDegree('Master');

example.addEducation(example_highschool);
example.addEducation(example_master);

exports.get_all = function(req, res) {
	var content= JSON.stringify(example);
	res.write(content);
	res.end();
};

exports.post_all = function(req, res) {
	example.fill(req.body);
	res.json({ message: 'Profile successfully updated' });
};

exports.get_education = function(req, res) {
	var content= JSON.stringify(example.getAllEducation());
	res.write(content);
	res.end();
};

exports.post_education = function(req, res) {
	for(var key in req.body) {
		if(!isNaN(key))
		{
			if(req.body.hasOwnProperty(key)){
				var newEdu = new education();
				newEdu.fill(req.body[key]);
				example.addEducation(newEdu);
			}
		} else {
			res.json({ error: 'education must be wrapped in an array' });
			return;
		}	  
	}
	res.json({ message: 'Education successfully updated' });
};

exports.del_education = function(req, res) {
	example.cleanEducation();
	res.json({ message: 'Education successfully cleaned' });
};

exports.get_education_byindex = function(req, res) {
	var edu_record = example.getEducation(req.params.edu_index);
	if(edu_record != -1)
	{
		var content= JSON.stringify(edu_record);
		res.write(content);
		res.end();
	} else {
		res.json({ error: 'Record does not exist' });
	}	
};

exports.put_education_byindex = function(req, res) {
	var result = example.setEducation(req.params.edu_index, req.body);
	if(result != -1)
	{
		res.json({ message: 'One record of education successfully updated' });
	} else {
		res.json({ error: 'Record does not exist' });
	}
};

exports.del_education_byindex = function(req, res) {
	var result = example.delEducation(req.params.edu_index);
	if(result != -1)
	{
		res.json({ message: 'One record of education successfully deleted' });
	} else {
		res.json({ error: 'Record does not exist' });
	}
};

exports.get_name = function(req, res) {
	var content= JSON.stringify(example.getName());
	res.write(content);
	res.end();
};

exports.put_name = function(req, res) {
	var newName = req.body.name;
	if(newName !== undefined)
	{
		example.setName(newName);
		res.json({ message: 'Name successfully updated' });
	}
	else {
		res.json({ error: 'name is undefined' });
	}
};