// Function getStudentsByLocation that returns an array of objects who are located in a specific city.
export default function getStudentsByLocation(students, city) {
    return students.filter(student => student.locaion === city);
}
