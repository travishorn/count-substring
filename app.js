module.exports = function(str, substr) {
  var matches = str.match(new RegExp(substr, 'g'));

  return matches == null ? 0 : matches.length;
}