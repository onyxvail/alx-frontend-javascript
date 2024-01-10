// Define interfaces
interface Employee {
    workFromHome(): string;
    getCoffeeBreak(): string;
}

interface Director extends Employee {
    workDirectorTasks(): string;
}

interface Teacher extends Employee {
    workTeacherTasks(): string;
}

// Implement classes
class DirectorClass implements Director {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class TeacherClass implements Teacher {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new TeacherClass();
    } else {
        return new DirectorClass();
    }
}

// Type guard for checking if an employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof DirectorClass;
}

// Function to execute work based on the type of employee
function executeWork(employee: Director | Teacher): string {
    return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

// Test the functions
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks

// Define a String literal type named Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on today's subject
function teachClass(todayClass: Subjects): string {
    switch (todayClass) {
        case 'Math':
            return 'Teaching Math';
        case 'History':
            return 'Teaching History';
        default:
            return '';
    }
}

// Test the teachClass function
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
