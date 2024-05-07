// Function getStudentIdsSum that returns the sum of all the student ids.
export default function getStudentIdsSum(students) {
  return (students.reduce((add, student) => add + student.id, 0));
}
