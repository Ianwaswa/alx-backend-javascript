/**
 * Defines a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Initializes a new instance of {@link HolbertonCourse}.
   *
   * @param {String} name - The course name.
   * @param {Number} length - The duration of the course (in months).
   * @param {String[]} students - The list of student names enrolled in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Retrieves the course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Updates the course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Retrieves the course length (in months).
   */
  get length() {
    return this._length;
  }

  /**
   * Updates the course length (in months).
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Retrieves the list of students in this course.
   */
  get students() {
    return this._students;
  }

  /**
   * Updates the list of students in this course.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
