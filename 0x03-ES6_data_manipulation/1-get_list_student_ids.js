/**
 * Extracts and returns the ids from a list of student objects.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - An array of student objects.
 * @author Ian Juma <https://github.com/Ianwaswa>
 * @returns {Number[]} An array of student ids. Returns an empty array if the input is not an array.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
