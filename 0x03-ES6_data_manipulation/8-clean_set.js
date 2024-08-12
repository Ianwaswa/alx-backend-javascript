/**
 * Joins a set of strings with a dash after removing a specified prefix from each string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The prefix to strip from the beginning of each item in the set.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {String} A string of the modified set values joined by a dash, or an empty string if input is invalid.
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
