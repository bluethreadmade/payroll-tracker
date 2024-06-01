// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let addMore = true;
  const employeesArray = []; 
  
  while(addMore) {
    let firstName = prompt(`Enter first name`);
    let lastName = prompt(`Enter last name`);
    let salary = prompt(`Enter salary`);

    salary = parseFloat(salary);
    
    if (isNaN(salary)) {
      salary = 0;
    } 

    let currentEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    
    employeesArray.push(currentEmployee);

    // console.table(employeesArray);

    addMore = window.confirm(`Add more employees?`);
  }

  return employeesArray;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  const salaries = employeesArray.map(currentEmployee => currentEmployee.salary);
  const sum = salaries.reduce((acc, curr) => acc +curr, 0);
  const average = sum / employeesArray.length;

  console.log(`The average salary is $${average} and there are ${employeesArray.length} employees.`)

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // generate a random number within the array length and display the name of the employee at that array index
  const randomEmployeeIndex = Math.floor(Math.random() * employeesArray.length);
  console.log(`Congrats to ${employeesArray[randomEmployeeIndex].firstName} ${employeesArray[randomEmployeeIndex].lastName}, our random drawing winner`)

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
