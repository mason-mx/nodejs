'use strict';

class education {

  constructor(from, to, school, level) {
    this.from = from || null;
    this.to = to || null;
    this.school = school || null;
    this.level = level || null;
  }

  getFrom() {
    return this.from;
  }
  setFrom(from) {
    this.from = from;
  }

  getTo() {
    return this.to;
  }
  setTo(to) {
    this.to = to;
  }

  getSchool() {
    return this.school;
  }
  setSchool(school) {
    this.school = school;
  }

  getLevel() {
    return this.level;
  }
  setLevel(level) {
    this.level = level;
  }

  equals(otherEdu) {
    return otherEdu.getFrom() == this.getFrom()
        && otherEdu.getTo() == this.getTo()
        && otherEdu.getSchool() == this.getSchool()
        && otherEdu.getLevel() == this.getLevel();
  }

  fill(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }
  }
};

module.exports = education;