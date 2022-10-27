//problem 1
let Sam = {
    name: "Sam",
    department: "Tech",
    job: "Manager",
    salary: 40000,
    raise: true
};

let Mary = {
    name: "Mary",
    department: "Finance",
    job: "Trainee",
    salary: 18500,
    raise: true
};

let Bill = {
    name: "Bill",
    department: "HR",
    job: "Executive",
    salary: 21200,
    raise: false
};

console.log("Problem 1", [Sam, Mary, Bill]);

//problem 2

const Company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [Sam, Mary, Bill]
};

console.log("Problem 2", Company);

//problem 3

Company.employees.push( {
    name: "Anna",
    department: "Tech",
    job: "Executive",
    salary: 25600,
    raise: false
});

console.log("Problem 3", Company);

//Problem 4

let sum = 0;
for(let i = 0; i < Company.employees.length; i++) {
    sum += Company.employees[i].salary;
}

console.log("Problem 4", sum);

//Problem 5

for(let i = 0; i < Company.employees.length; i++) {
    if(Company.employees[i].raise) {
        Company.employees[i].salary *= 1.1;
        Company.employees[i].raise = false;
    }
}

console.log("Problem 5", Company);

//problem 6

for(let i = 0; i < Company.employees.length; i++) {
    if(Company.employees[i].name === "Anna" || Company.employees[i].name === "Sam") {
        Company.employees[i].wfh = true;
    }
    else {
        Company.employees[i].wfh = false;
    }
}

console.log("Problem 6", Company);