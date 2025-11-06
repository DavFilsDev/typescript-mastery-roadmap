/**
 * EXERCISE 5: Employee Management System - SOLUTION
 */

// Solution: Abstract Employee class
abstract class Employee {
  constructor(
    protected name: string,
    protected id: number,
    protected salary: number
  ) {}

  getName(): string {
    return this.name;
  }

  getId(): number {
    return this.id;
  }

  getSalary(): number {
    return this.salary;
  }

  abstract calculateBonus(): number;
}

// Solution: Manager class
class Manager extends Employee {
  private teamSize: number;

  constructor(name: string, id: number, salary: number, teamSize: number) {
    super(name, id, salary);
    this.teamSize = teamSize;
  }

  calculateBonus(): number {
    return this.salary * 0.1 + (500 * this.teamSize);
  }

  getTeamSize(): number {
    return this.teamSize;
  }
}

// Solution: Developer class
class Developer extends Employee {
  constructor(
    name: string,
    id: number,
    salary: number,
    private programmingLanguage: string
  ) {
    super(name, id, salary);
  }

  calculateBonus(): number {
    return this.salary * 0.15;
  }

  getLanguage(): string {
    return this.programmingLanguage;
  }
}

// Solution: Intern class
class Intern extends Employee {
  constructor(
    name: string,
    id: number,
    salary: number,
    private duration: number
  ) {
    super(name, id, salary);
  }

  calculateBonus(): number {
    return this.duration > 3 ? 1000 : 500;
  }
}

// Solution: Department class
class Department {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
    console.log(`Added: ${employee.getName()}`);
  }

  removeEmployee(id: number): void {
    const index = this.employees.findIndex(e => e.getId() === id);
    if (index !== -1) {
      const removed = this.employees[index];
      this.employees.splice(index, 1);
      console.log(`Removed: ${removed.getName()}`);
    }
  }

  getTotalSalary(): number {
    return this.employees.reduce((total, e) => total + e.getSalary(), 0);
  }

  getTotalBonus(): number {
    return this.employees.reduce((total, e) => total + e.calculateBonus(), 0);
  }

  listEmployees(): void {
    console.log("\n=== Employees ===");
    this.employees.forEach(e => {
      console.log(`${e.getName()} (ID: ${e.getId()}) - Salary: $${e.getSalary()}, Bonus: $${e.calculateBonus()}`);
    });
  }
}

// Test
const dept = new Department();

dept.addEmployee(new Manager("Alice", 1, 80000, 5));
dept.addEmployee(new Developer("Bob", 2, 70000, "TypeScript"));
dept.addEmployee(new Developer("Charlie", 3, 75000, "Python"));
dept.addEmployee(new Intern("Diana", 4, 30000, 6));
dept.addEmployee(new Intern("Eve", 5, 30000, 2));

dept.listEmployees();
console.log(`\nTotal Salary: $${dept.getTotalSalary()}`);
console.log(`Total Bonus: $${dept.getTotalBonus()}`);

// Bonus: Get employees by type
function getEmployeesByType<T extends Employee>(
  employees: Employee[], 
  type: new (...args: any[]) => T
): T[] {
  return employees.filter(e => e instanceof type) as T[];
}

const managers = getEmployeesByType(dept['employees'], Manager);
const developers = getEmployeesByType(dept['employees'], Developer);

console.log(`\nManagers: ${managers.length}`);
console.log(`Developers: ${developers.length}`);