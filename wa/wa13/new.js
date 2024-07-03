// Problem 1: Create JSON for each employee
const employees = [
    { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true },
    { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true },
    { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false }
];

console.log("Problem 1:", JSON.stringify(employees, null, 2));

// Problem 2: Create JSON for the company
const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [...employees] // Copy of the employees array
};

console.log("Problem 2:", JSON.stringify(company, null, 2));

// Problem 3: A new employee has joined the company
const newEmployee = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false };
company.employees.push(newEmployee);
console.log("Problem 3:", JSON.stringify(company, null, 2));

// Problem 4: Calculate the total salary for all company employees
const totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Problem 4: Total Salary =", totalSalary);

// Problem 5: Apply raises to eligible employees and update their raise eligibility
function applyRaises(companyData) {
    const updatedCompanyData = { ...companyData, employees: companyData.employees.map(employee => ({ ...employee })) };
    updatedCompanyData.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.10; // Increase salary by 10%
            employee.raiseEligible = false; // Set raise eligibility to false
        }
    });
    return updatedCompanyData;
}

const companyWithRaises = applyRaises(company);
console.log("Problem 5:", JSON.stringify(companyWithRaises, null, 2));

// Problem 6: Update work from home status
const wfhEmployees = ['Anna', 'Sam'];

function updateWFHStatus(companyData, wfhList) {
    const updatedCompanyData = { ...companyData, employees: companyData.employees.map(employee => ({ ...employee })) };
    updatedCompanyData.employees.forEach(employee => {
        employee.wfh = wfhList.includes(employee.firstName);
    });
    return updatedCompanyData;
}

const companyWithWFHStatus = updateWFHStatus(companyWithRaises, wfhEmployees);
console.log("Problem 6:", JSON.stringify(companyWithWFHStatus, null, 2));