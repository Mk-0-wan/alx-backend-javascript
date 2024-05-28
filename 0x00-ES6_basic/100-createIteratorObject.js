export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeeList = [];

  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  return {
    [Symbol.iterator]() {
      let currentIndex = 0;

      return {
        next() {
          if (currentIndex < employeeList.length) {
            return { value: employeeList[currentIndex++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
