export default function createReportObject(employeesList) {
    return {
        allEmployees: { ...employeesList },
        getNumberOfDepartments(employeesList) {
            let con = 0;
            for (let dep in this.allEmployees) {
                con += 1;
            }
            return con;
        }
    };
}
