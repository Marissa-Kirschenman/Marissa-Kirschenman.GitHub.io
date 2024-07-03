 // Problem 1
const employees = [

    {"firstName": "Sam", 
    "department": "Tech", 
    "designation": "Manager", 
    "salary": 40000, 
    "raiseEligible": true },
    
    {"firstName": "Mary", 
    "department": "Finance", 
    "designation": "Trainee", 
    "salary": 18500, 
    "raiseEligible": true },
    
    {"firstName": "Bill", 
    "department": "HR", 
    "designation": "Executive", 
    "salary": 21200, 
    "raiseEligible": false },
    
    
];


    console.log("Problem 1:", JSON.stringify(employees));

// Problem 2

const company = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [...employees]
};


    console.log("Problem 2:", JSON.stringify(company));


// Problem 3
    const newEmployee = { 
    firstName: "Anna", 
    department: "Tech", 
    designation: "Executive", 
    salary: 25600, 
    raiseEligible: false };


    

    company.employees.push(newEmployee);
    console.log("Problem 3:", JSON.stringify(company));

// Problem 4

const totalSalary = company.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Problem 4: Total Salary =", totalSalary);


// Problem 5

function applyRaises(companyData) {

    company.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.10;
            employee.raiseEligible = false;
        }
    });
    return companyData;
}

const companyWithRaises = applyRaises(company);
console.log("Problem 5:", JSON.stringify(companyWithRaises));

 // Problem 6

 const wfhEmployees = ['Anna', 'Sam'];
function updateWFHStatus(companyData, wfhList) {
    companyData.employees.forEach(employee => {
        employee.wfh = wfhList.includes(employee.firstName);
    });
    return companyData
}

const companyWithWFHStatus = updateWFHStatus(companyWithRaises, wfhEmployees);
console.log("Problem 6:", JSON.stringify(companyWithWFHStatus));