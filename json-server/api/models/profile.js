'use strict';

class profile {

  constructor(name, email) {
    this.name = name || null;
    this.email = email || null;
    this.education = [];
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }

  getAllEducation() {
    return this.education;
  }
  getEducation(index) {
    if(index < this.education.length && index > -1)
    {
      return this.education[index];
    } else {
      return -1;
    }
  }
  addEducation(education) {
    this.education.push(education);
  }
  setEducation(index, education) {
    if(index < this.education.length && index > -1)
    {
      this.education[index].fill(education);
      return 0;
    } else {
      return -1;
    }    
  }
  delEducation(index) {
    if(index < this.education.length && index > -1)
    {
      this.education.splice(index, 1);
      return 0;
    } else {
      return -1;
    }
  }
  cleanEducation() {
    this.education = [];
    this.education.length = 0;
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

module.exports = profile;