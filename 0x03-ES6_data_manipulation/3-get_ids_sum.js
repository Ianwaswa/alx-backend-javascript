/**
 * Calculates and returns the sum of the ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - An array of student objects.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {Number} The sum of the student ids. Returns 0 if the input is not an array.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (total, student) => total + student.id,
      0,
    );
  }
  return 0;
}
