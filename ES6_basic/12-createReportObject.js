export default function createReportObject(employeesList) {
    return {
      allEmployees: { ...employeesList },
  
      getNumberOfDepartments() {
        let con = 0;
        for (const dep in this.allEmployees) {
          if (this.allEmployees.hasOwnProperty(dep)) {
            con += 1;
          }
        }
        return con;
      },
    };
  }
