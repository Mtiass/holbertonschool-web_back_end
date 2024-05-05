// Implement a class named HolbertonCourse.

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newname;
  }

  get length() {
    return this._length;
  }

  set length(uplength) {
    if (typeof uplength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = uplength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    if (!Array.isArray(newstudents) || !newstudents.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newstudents;
  }
}
