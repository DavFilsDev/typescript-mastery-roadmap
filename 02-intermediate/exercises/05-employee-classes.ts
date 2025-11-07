/**
 * EXERCISE 5: Employee Management System
 * 
 * Create classes for an employee management system
 */

// TODO: Create an Employee base class with:
// - protected properties: name, id, salary
// - public methods: getName(), getId(), getSalary()
// - abstract method: calculateBonus(): number


// TODO: Create a Manager class that extends Employee:
// - Add private property: teamSize
// - Override calculateBonus() (10% of salary + 500 * teamSize)


// TODO: Create a Developer class that extends Employee:
// - Add private property: programmingLanguage
// - Override calculateBonus() (15% of salary)


// TODO: Create an Intern class that extends Employee:
// - Add private property: duration (in months)
// - Override calculateBonus() (fixed 1000 if duration > 3 else 500)


// TODO: Create a Department class that manages employees:
// - Private array of employees
// - Methods: addEmployee, removeEmployee, getTotalSalary, getTotalBonus

// Test your implementation