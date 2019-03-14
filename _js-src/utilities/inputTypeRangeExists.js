/**
 * @desc check of at least one type of element exists
 * @param type {object} A list of html input fields
 * @param fields {string} The type of element that should exist
 * @returns {boolean} if an element of a certain type exists
 */
const inputTypeRangeExists = function(fields, type) {
  let rangeFields = 0;
  Object.entries(fields).forEach(([key, field]) => {
    if (field.type === type) {
      rangeFields++;
    }
  });
  return rangeFields >= 1;
};

export default inputTypeRangeExists;
