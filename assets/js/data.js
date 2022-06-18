const composeData = (title, author, year, isFinished) => {
  return {
    id: +new Date(),
    title,
    author,
    year,
    isFinished,
  };
};

const isStorageExist = () => {
  if (typeof Storage === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
};

const saveData = () => {
  const parsed = JSON.stringify(books);
  localStorage.setItem(BOOKSHELF_KEY, parsed);
  document.dispatchEvent(new Event('ondatasaved'));
};

const loadDataFromStorage = () => {
  const serializedData = localStorage.getItem(BOOKSHELF_KEY);

  let data = JSON.parse(serializedData);

  if (data !== null) books = data;

  document.dispatchEvent(new Event('ondataloaded'));
};

const updateDataToStorage = () => {
  if (isStorageExist()) saveData();
};

const findBook = (bookId) => {
  for (book of books) {
    if (book.id === bookId) return book;
  }
  return null;
};

const findBookIndex = (bookId) => {
  let index = 0;
  for (book of books) {
    if (book.id === bookId) return index;

    index++;
  }

  return -1;
};

const COMPLETED_BOOKS_ID = 'completed-books';
const UNCOMPLETE_BOOKS_ID = 'uncomplete-books';
const SEARCH_FIELD_ID = 'search';
const TITLE_FIELD_ID = 'title';
const AUTHOR_FIELD_ID = 'author';
const YEAR_FIELD_ID = 'year';
const IS_FINISEHD_ID = 'is-finished';
const SUBMIT_BUTTON_ID = 'submit';
const EDIT_BUTTON_ID = 'edit';
const HIDDEN_INPUT = 'bookId';
const BOOKSHELF_KEY = 'bookshelf';
const BOOK_ID = 'bookID';
let books = [];
const BTN_ATTRIBUTES = [
  {
    type: 'markCompleted',
    class: 'btn-mark-as-read',
    title: 'Mark as Read',
    icon: '<i class="fas fa-bookmark"></i>',
  },
  {
    type: 'markUncomplete',
    class: 'btn-mark-as-read',
    title: 'Mark as Read',
    icon: '<i class="far fa-bookmark"></i>',
  },
  {
    type: 'edit',
    class: 'btn-edit',
    title: 'Edit Book',
    icon: '<i class="fas fa-edit"></i>',
  },
  {
    type: 'delete',
    class: 'btn-delete',
    title: 'Delete Book',
    icon: '<i class="fas fa-trash"></i>',
  },
];
