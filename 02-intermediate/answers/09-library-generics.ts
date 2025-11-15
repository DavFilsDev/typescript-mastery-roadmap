/**
 * EXERCISE 9: Generic Library System - SOLUTION
 */

// Solution: Generic LibraryItem interface
interface LibraryItem<T> {
  id: number;
  title: string;
  data: T;
  borrowed: boolean;
  borrowedBy?: string;
}

// Solution: Generic Library class
class Library<T> {
  private items: LibraryItem<T>[] = [];
  private nextId = 1;

  addItem(title: string, data: T): LibraryItem<T> {
    const item: LibraryItem<T> = {
      id: this.nextId++,
      title,
      data,
      borrowed: false
    };
    
    this.items.push(item);
    console.log(`Added: "${title}" (ID: ${item.id})`);
    return item;
  }

  removeItem(id: number): boolean {
    const index = this.items.findIndex(item => item.id === id);
    if (index === -1) return false;
    
    const item = this.items[index];
    if (item.borrowed) {
      console.log(`Cannot remove "${item.title}" - it's borrowed`);
      return false;
    }
    
    this.items.splice(index, 1);
    console.log(`Removed: "${item.title}"`);
    return true;
  }

  borrowItem(id: number, user: string): boolean {
    const item = this.findById(id);
    if (!item) return false;
    
    if (item.borrowed) {
      console.log(`"${item.title}" is already borrowed by ${item.borrowedBy}`);
      return false;
    }
    
    item.borrowed = true;
    item.borrowedBy = user;
    console.log(`"${item.title}" borrowed by ${user}`);
    return true;
  }

  returnItem(id: number): boolean {
    const item = this.findById(id);
    if (!item) return false;
    
    if (!item.borrowed) {
      console.log(`"${item.title}" wasn't borrowed`);
      return false;
    }
    
    item.borrowed = false;
    item.borrowedBy = undefined;
    console.log(`"${item.title}" returned`);
    return true;
  }

  getAvailableItems(): LibraryItem<T>[] {
    return this.items.filter(item => !item.borrowed);
  }

  getBorrowedItems(): LibraryItem<T>[] {
    return this.items.filter(item => item.borrowed);
  }

  findById(id: number): LibraryItem<T> | undefined {
    return this.items.find(item => item.id === id);
  }

  findByTitle(title: string): LibraryItem<T>[] {
    return this.items.filter(item => 
      item.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  getAllItems(): LibraryItem<T>[] {
    return [...this.items];
  }
}

// Specific types
interface Book {
  author: string;
  pages: number;
  genre: string;
}

interface DVD {
  director: string;
  duration: number; // minutes
  rating: string;
}

interface Magazine {
  issue: number;
  publisher: string;
  month: string;
}

// Create libraries
const bookLibrary = new Library<Book>();
const dvdLibrary = new Library<DVD>();
const magazineLibrary = new Library<Magazine>();

// Add books
console.log("=== Book Library ===");
bookLibrary.addItem("1984", { 
  author: "George Orwell", 
  pages: 328, 
  genre: "Fiction" 
});
bookLibrary.addItem("Clean Code", { 
  author: "Robert Martin", 
  pages: 464, 
  genre: "Programming" 
});
bookLibrary.addItem("The Hobbit", { 
  author: "J.R.R. Tolkien", 
  pages: 310, 
  genre: "Fantasy" 
});

// Add DVDs
console.log("\n=== DVD Library ===");
dvdLibrary.addItem("Inception", { 
  director: "Christopher Nolan", 
  duration: 148, 
  rating: "PG-13" 
});
dvdLibrary.addItem("The Matrix", { 
  director: "Wachowski Sisters", 
  duration: 136, 
  rating: "R" 
});

// Add Magazines
console.log("\n=== Magazine Library ===");
magazineLibrary.addItem("Tech Monthly", { 
  issue: 45, 
  publisher: "Tech Media", 
  month: "March 2024" 
});
magazineLibrary.addItem("Science Today", { 
  issue: 123, 
  publisher: "Science Press", 
  month: "February 2024" 
});

// Test borrowing
console.log("\n=== Borrowing Books ===");
bookLibrary.borrowItem(1, "Alice");
bookLibrary.borrowItem(1, "Bob"); // Should fail
bookLibrary.borrowItem(2, "Bob");

console.log("\nAvailable books:", bookLibrary.getAvailableItems().length);
console.log("Borrowed books:", bookLibrary.getBorrowedItems().length);

bookLibrary.returnItem(1);
console.log("After return - Available:", bookLibrary.getAvailableItems().length);

// Search
console.log("\n=== Search Results ===");
const found = bookLibrary.findByTitle("code");
found.forEach(item => {
  console.log(`Found: ${item.title} by ${item.data.author}`);
});

// Bonus: Report generator
function generateLibraryReport<T>(library: Library<T>, name: string): void {
  const total = library.getAllItems().length;
  const available = library.getAvailableItems().length;
  const borrowed = library.getBorrowedItems().length;
  
  console.log(`\n=== ${name} Report ===`);
  console.log(`Total items: ${total}`);
  console.log(`Available: ${available}`);
  console.log(`Borrowed: ${borrowed}`);
  console.log(`Availability rate: ${((available / total) * 100).toFixed(1)}%`);
}

generateLibraryReport(bookLibrary, "Book Library");
generateLibraryReport(dvdLibrary, "DVD Library");