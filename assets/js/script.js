// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// resetting the array to empty, this needs to happen outside of the while loop otherwise only 1 object is held in the array
const employeesArray = []; 

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  // initializing a variable called addMore to a boolean of true
  let addMore = true;
  
  // while addMore is true prompt the user for a first name, last name and salary
  while(addMore) {
    let firstName = prompt(`Enter first name`);
    let lastName = prompt(`Enter last name`);
    let salary = prompt(`Enter salary`);

    // converting anything that can be a number to a number 
    salary = parseFloat(salary);
    
    // if something input for salary is not a number, set the salary to zero
    if (isNaN(salary)) {
      salary = 0;
    } 

    // initializing an object called currentEmployee to name the key value pairs inside
    let currentEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    
    // pushing the newly input current employee data into the employeesArray
    employeesArray.push(currentEmployee);

    // asking the user if they want to add more employees, setting the answer to the addMore boolean (if yes, continuing to cycle the while loop if no, exiting the while loop)
    addMore = window.confirm(`Add more employees?`);
  }

  // returning the employeesArray as the output of the collectEmployees function
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
