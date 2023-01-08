const {
  getHomeHandler,
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdHandler,
  deleteBooksByIdHandler
} = require('./handler')
const path = '/books'

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: getHomeHandler
  },
  {
    method: 'POST',
    path: path,
    handler: addBooksHandler
  },
  {
    method: 'GET',
    path: path,
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: `${path}/{id}`,
    handler: getBooksByIdHandler
  },
  {
    method: 'PUT',
    path: `${path}/{id}`,
    handler: editBooksByIdHandler
  },
  {
    method: 'DELETE',
    path: `${path}/{id}`,
    handler: deleteBooksByIdHandler
  }
]

module.exports = routes
