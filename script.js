// Assume employees.json is in the same directory as your HTML/JS file

// Function to fetch data from a JSON file
async function fetchEmployees() {
  try {
    const response = await fetch('employees.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge(employees) {
  return employees.sort((a, b) => a.age - b.age);
}

// Function to log sorted employees to the console
function logSortedEmployees(sortedEmployees) {
  console.log(sortedEmployees);
}

// Main function to orchestrate the process
async function main() {
  try {
    const employees = await fetchEmployees();
    const sortedEmployees = sortEmployeesByAge(employees);
    logSortedEmployees(sortedEmployees);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Run the main function
main();
