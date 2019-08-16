'use strict';

const education = require('../models/education');

class tertiary extends education {
  constructor(from, to, school, degree) {
    super(from, to, school);
    this.level = 'tertiary';
    this.degree = degree || null;
  }
  
  getDegree() {
    return this.degree;
  }
  setDegree(degree) {
    this.degree = degree;
  }

  equals(otherEdu) {
    var basic = super.equals(otherEdu);
    return otherEdu.getDegree() == this.getDegree()
        && basic;
  }
};

module.exports = tertiary;