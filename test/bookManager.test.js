const Book = require('../book');
const BookManager = require('../bookManager');

describe('BookManager', () => {
  let bookManager;

  beforeEach(() => {
    bookManager = new BookManager();
  });

  test('Test menambahkan buku', () => {
    const book = new Book("Test Book", "Test Author", 2023);
    bookManager.addBook(book);
    expect(bookManager.getBookCount()).toBe(1);
  });

  test('Test menghapus buku yang ada', () => {
    const book = new Book("To Remove", "Author", 2023);
    bookManager.addBook(book);

    const removed = bookManager.removeBook("To Remove");
    expect(removed).toBe(true);
    expect(bookManager.getBookCount()).toBe(0);
  });

  // Unit Test: menghapus buku yang tidak ada di list
  test('Test menghapus buku yang tidak ada', () => {
    const removed = bookManager.removeBook("Not Exist");
    expect(removed).toBe(false);
    expect(bookManager.getBookCount()).toBe(0);
  });

  // Unit Test: mencari buku berdasarkan penulis
  test('Test mencari buku berdasarkan author', () => {
    const book1 = new Book("Book One", "Author A", 2021);
    const book2 = new Book("Book Two", "Author B", 2022);
    bookManager.addBook(book1);
    bookManager.addBook(book2);

    const result = bookManager.findBooksByAuthor("Author A");
    expect(result).toContainEqual(book1);
    expect(result).not.toContainEqual(book2);
  });

  // Unit Test: mendapatkan semua buku
  test('Test mendapatkan semua buku', () => {
    const book1 = new Book("Book One", "Author A", 2021);
    const book2 = new Book("Book Two", "Author B", 2022);
    bookManager.addBook(book1);
    bookManager.addBook(book2);

    const allBooks = bookManager.getAllBooks();
    expect(allBooks.length).toBe(2);
    expect(allBooks).toContainEqual(book1);
    expect(allBooks).toContainEqual(book2);
  });
});