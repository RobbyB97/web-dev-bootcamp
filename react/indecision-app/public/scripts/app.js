'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

var me = new Person('Robby Bergers');
console.log(me);

var other = new Person();
console.log(other);
