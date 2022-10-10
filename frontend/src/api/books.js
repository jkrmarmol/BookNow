// TODO: Import API_ENDPOINT
export const addNewBook = async (newTitle, newStart, newEnd) => {
  const response = await fetch('http://localhost:3001/books', {
    method: 'POST',
    body: JSON.stringify({
      title: newTitle,
      start: newStart,
      end: newEnd
    }),
    headers: {
      'Content-type': 'application/json'
    }
  });
  const newBook = await response.json();
  return newBook;
}

export const getBooks = async () => {
  const response = await fetch('http://localhost:3001/books');
  const book = await response.json();
  return book;
}

export const updateBook = async (id, newTitle, newStart, newEnd) => {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      newTitle,
      newStart,
      newEnd
    }),
    header: {
      'Content-type': 'application/json'
    }
  });
  return response.status;
}

export const deleteBook = async (id) => {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: 'DELETE'
  });
  return response.status;
}
// TODO: Create the addNewBook function that takes in newTitle, newStart, and newEnd as arguments. Inside the function, create a POST request for the new book. Store the response as a JSON in a variable called newBook and return it at the end of the function.

// TODO: Create the getBooks function that retrieves all of the books that have been saved to the back-end API

// TODO: Create the updateBook function that takes the arguments id, newTitle, newStart, newEnd. Inside of the function, create a PUT request for the specified book to be updated. Return the status of the response at the end of the function.

// TODO: Create the deleteBook function that takes the id of the book to be deleted as an argument. Inside of the function, create a DELETE request for the specified book to be deleted. Return the status of the response at the end of the function.