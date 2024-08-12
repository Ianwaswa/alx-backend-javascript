/**
 * Filters and returns the students who are in a specified location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - An array of student objects.
 * @param {String} city - The location to filter by.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} An array of student objects who are in the specified location. Returns an empty array if the input is not an array.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
