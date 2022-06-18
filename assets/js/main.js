document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('book-data-input');
  const searchForm = document.getElementById('search-form');
  const editButton = document.getElementById(EDIT_BUTTON_ID);
  document.getElementById('resetSearch').style.display = 'none';
  editButton.style.display = 'none';

  submitForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookList();
  });

  submitForm.addEventListener('reset', (event) => {
    event.preventDefault();
    clearForm();
  });

  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.getElementById('resetSearch').style.display = '';
    searchData();
  });

  searchForm.addEventListener('reset', (event) => {
    event.preventDefault();

    const completedBooksContainer = document.getElementById(COMPLETED_BOOKS_ID);
    const uncompleteBooksContainer = document.getElementById(UNCOMPLETE_BOOKS_ID);

    completedBooksContainer.innerHTML = '';
    uncompleteBooksContainer.innerHTML = '';

    document.getElementById('resetSearch').style.display = 'none';
    refreshDataFromBooks();
  });

  editButton.addEventListener('click', (event) => {
    updateData();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener('ondatasaved', () => {
  console.log('Data saved');
});

document.addEventListener('ondataloaded', () => {
  refreshDataFromBooks();
});
