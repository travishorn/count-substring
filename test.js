/*global describe:false, it:false*/

var countSubstring = require('./app.js');
require('chai').should();

describe('count-substring', function() {
  'use strict';

  it('Returns 0 on no instances', function() {
    countSubstring('foo', 'bar').should.equal(0);
  });

  it('Returns 1 on a single instance', function() {
    countSubstring('foo bar', 'bar').should.equal(1);
  });

  it('Returns 2 on two instances', function() {
    countSubstring('foo bar baz bar', 'bar').should.equal(2);
  });

  it('Works with slashes in substring', function() {
    countSubstring('foo bar', '/bar/').should.equal(0);
  });

  it('Works with slashes in string and substring', function() {
    countSubstring('foo /bar/ bar', '/bar/').should.equal(1);
  });

  it('Counts commas', function() {
    countSubstring('Cats, dogs, and fish.', ',').should.equal(2);
  });
});
