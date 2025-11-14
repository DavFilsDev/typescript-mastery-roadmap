/**
 * EXERCISE 9: Generic Library System
 * 
 * Create a generic library management system
 */

// TODO: Create a generic LibraryItem<T> interface with:
// - id: number
// - title: string
// - data: T
// - borrowed: boolean
// - borrowedBy?: string


// TODO: Create a Library<T> class that manages items:
// - Private array of items
// - Methods: addItem, removeItem, borrowItem, returnItem
// - Methods: getAvailableItems, getBorrowedItems
// - Method: findById, findByTitle


// TODO: Create specific types for:
// - Book: author: string, pages: number, genre: string
// - DVD: director: string, duration: number, rating: string
// - Magazine: issue: number, publisher: string, month: string


// TODO: Create separate library instances for each type


// Test your implementation
// const bookLibrary = new Library<Book>();
// bookLibrary.addItem({ id: 1, title: "1984", data: { author: "Orwell", pages: 328, genre: "Fiction" } });