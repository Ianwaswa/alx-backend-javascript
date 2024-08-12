/**
 * Updates the grades of students in a specific city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - An array of student objects.
 * @param {String} city - The city where the students are located.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - An array of objects representing the new grades for students.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 * @returns {{
 *   id: Number,
 *   firstName: String,
 *   location: String,
 *   grade: String | Number
 * }[]} An array of student objects with updated grades for those in the specified city. Students without a grade will have 'N/A'.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
