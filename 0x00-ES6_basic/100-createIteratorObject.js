export default function createIteratorObject(report) {
  let employeeIndex = 0;
  let departmentIndex = 0;

  const iterator = {
    next() {
      if (departmentIndex >= report.length) {
        return { done: true };
      }

      const currentDepartment = report[departmentIndex];
      const currentEmployee = currentDepartment.employees[employeeIndex];

      if (employeeIndex < currentDepartment.employees.length - 1) {
        employeeIndex++;
      } else {
        employeeIndex = 0;
        departmentIndex++;
      }

      return { value: currentEmployee };
    }
  };

  return iterator;
}

