/**
 * EXERCISE 9: Todo List
 * 
 * Build a simple todo manager
 */

// TODO: Create a Todo type with:
// - id (number)
// - title (string)
// - completed (boolean)
// - priority: "low" | "medium" | "high"


// TODO: Create a todo array with 3-4 sample todos


// TODO: Function to add a new todo
function addTodo(todos: any[], title: string, priority: any): any[] {
  // Your code here
  return [];
}

// TODO: Function to toggle todo completion status by id
function toggleTodo(todos: any[], id: number): any[] {
  // Your code here
  return [];
}

// TODO: Function to get only high priority todos
function getHighPriorityTodos(todos: any[]): any[] {
  // Your code here
  return [];
}

// Test your functions
let myTodos: any[] = [
  { id: 1, title: "Learn TypeScript", completed: false, priority: "high" }
];

myTodos = addTodo(myTodos, "Practice exercises", "medium");
console.log(myTodos);
console.log(getHighPriorityTodos(myTodos));