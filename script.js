const myLibrary = [];

// the book constructor
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;

    this.toggleReadStatus = function() {
        this.isRead = !this.isRead;
    };
}
// Function to add book to library
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayBooks();
}

// A function that displays the book
function displayBooks() {
    const libraryContainer = document.getElementById('libraryContainer');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('bookCard');

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.isRead ? "Read" : "Not Read"}</p>
            <button onclick="toggleReadStatus(${index})">${book.isRead ? "Mark as Unread" : "Mark as Read"}</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;

        libraryContainer.appendChild(bookCard);
    });
}

// A function handling form submission to add new book
document.getElementById('newBookBtn').addEventListener('click', () => {
    document.getElementById('formContainer').classList.toggle('hidden');
});

document.getElementById('bookForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('isRead').checked;

    addBookToLibrary(title, author, pages, isRead);

    document.getElementById('bookForm').reset();
    document.getElementById('formContainer').classList.add('hidden');
});

// A function to remove a book from the library
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// A function to toggle the read status of the book
function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
    displayBooks();
}

