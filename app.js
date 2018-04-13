module.exports = function countSubstring(str, substr) {
  const matches = str.match(new RegExp(substr, 'g'));

  return matches == null ? 0 : matches.length;
};
