// Function to fetch JSON data from a file asynchronously
function fetchEmployees() {
  return fetch('employees.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => data.employees)
    .catch((error) => {
      console.error('Error fetching employees:', error);
      return [];
    });
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge(employees) {
  return employees.sort((a, b) => a.age - b.age);
}

// Function to log the sorted list of employees
function logSortedEmployees(employees) {
  console.log('Sorted Employees by Age (Ascending Order):');
  employees.forEach((employee) => {
    console.log(`Name: ${employee.name}, Age: ${employee.age}`);
  });
}

// Fetch employees and perform sorting and logging
fetchEmployees()
  .then((employees) => {
    const sortedEmployees = sortEmployeesByAge(employees);
    logSortedEmployees(sortedEmployees);
  })
  .catch((error) => {
    console.error('Error:', error);
  });