/**
 * Determines if a set contains all elements of a given array.
 * @param {Set} set - The set to check for the presence of array elements.
 * @param {Array} array - The array of elements to check against the set.
 * @author Ian Juma <https://github.com/Ianwaswa>
 * @returns {Boolean} True if all elements in the array are present in the set, otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
