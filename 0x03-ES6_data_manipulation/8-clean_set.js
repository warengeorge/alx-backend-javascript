/**
 * function checks if a set starts with a specific string.
 * @returns {String}
 */
const cleanSet = (set, startString) => {
  if (startString === undefined || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter((p) => (p !== undefined ? p.startsWith(startString) : ''))
    .map((p) => (p !== undefined ? p.slice(startString.length) : ''))
    .join('-');
};

export default cleanSet;
