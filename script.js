let books = []; // Array to store book objects
let editIndex = -1; // To track the index of the book being edited

// Form submit handler
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishYear = document.getElementById('publish-year').value;
    const price = document.getElementById('price').value;

    // Create a book object
    const book = { title, author, publishYear, price };

    // Add or update book
    if (editIndex === -1) {
        books.push(book); // Add new book
    } else {
        books[editIndex] = book; // Update existing book
        editIndex = -1; // Reset edit index
    }

    // Clear the form and reload the table
    document.getElementById('book-form').reset();
    loadBooks();
    document.getElementById('form-title').textContent = 'Add Book';
    document.getElementById('submit-button').textContent = 'Add Book';
});

// Load books into table
function loadBooks() {
    const tbody = document.querySelector('#books-table tbody');
    tbody.innerHTML = ''; // Clear the table body

    books.forEach((book, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publishYear}</td>
            <td>$${book.price}</td>
            <td>
                <button class="edit" onclick="editBook(${index})">Edit</button>
                <button class="delete" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// Edit a book
function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('publish-year').value = book.publishYear;
    document.getElementById('price').value = book.price;

    document.getElementById('form-title').textContent = 'Edit Book';
    document.getElementById('submit-button').textContent = 'Update Book';

    editIndex = index;
}

// Delete a book
function deleteBook(index) {
    if (confirm('Are you sure you want to delete this book?')) {
        books.splice(index, 1);
        loadBooks();
    }
}

// Initial load
loadBooks();
