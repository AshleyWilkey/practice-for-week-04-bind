// Your code here
import { Employee } from "./employee.js";

const john = new Employee("John Wick", "Dog Lover");
john.sayName();
setTimeout(john.sayName.bind(john), 2 * 1000);
setTimeout(john.sayOccupation.bind(john), 3000);
