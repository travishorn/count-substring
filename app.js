module.exports = function(str, substr) {
  'use strict';

  var matches = str.match(new RegExp(substr, 'g'));

  return matches == null ? 0 : matches.length;
};
