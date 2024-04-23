export default function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
  
      getNumberOfDepartments() {
        let con = 0;
        for (const dep in this.allEmployees) {
            if (Object.prototype.hasOwnProperty.call(this.allEmployees, dep)) {
            con += 1;
          }
        }
        return con;
      },
    };
  }
