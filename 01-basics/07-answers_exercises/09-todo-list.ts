/**
 * EXERCISE 9: Todo List - SOLUTION
 */

// Solution: Todo type
type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
};

// Solution: Sample todos
let todos: Todo[] = [
  { id: 1, title: "Learn TypeScript", completed: false, priority: "high" },
  { id: 2, title: "Build a project", completed: false, priority: "medium" },
  { id: 3, title: "Write documentation", completed: true, priority: "low" }
];

// Solution: Add new todo
function addTodo(todos: Todo[], title: string, priority: Todo["priority"]): Todo[] {
  const newTodo: Todo = {
    id: Math.max(...todos.map(t => t.id), 0) + 1,
    title,
    completed: false,
    priority
  };
  return [...todos, newTodo];
}

// Solution: Toggle todo completion
function toggleTodo(todos: Todo[], id: number): Todo[] {
  return todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

// Solution: Get high priority todos
function getHighPriorityTodos(todos: Todo[]): Todo[] {
  return todos.filter(todo => todo.priority === "high");
}

// Test
console.log("Initial todos:", todos);
todos = addTodo(todos, "Practice exercises", "medium");
console.log("After adding:", todos);
todos = toggleTodo(todos, 1);
console.log("After toggling todo 1:", todos);
console.log("High priority todos:", getHighPriorityTodos(todos));

// Bonus: Display formatted todos
function displayTodos(todos: Todo[]): void {
  console.log("\n My Todos:");
  todos.forEach(todo => {
    const status = todo.completed ? "✅" : "⭕";
    const priorityIcon = todo.priority === "high" ? "🔴" : todo.priority === "medium" ? "🟡" : "🟢";
    console.log(`${status} ${priorityIcon} #${todo.id}: ${todo.title}`);
  });
}

displayTodos(todos);