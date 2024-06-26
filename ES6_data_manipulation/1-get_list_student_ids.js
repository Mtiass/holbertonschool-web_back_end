// Function getListStudentIds that returns an array of ids from a list of object.
export default function getListStudentIds(objarray) {
  if (!Array.isArray(objarray)) {
    return [];
  }
  return (objarray.map((student) => student.id));
}
