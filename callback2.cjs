/* 
	Problem 2:- Write a function that will return all lists that belong to a board
    based on the boardID that is passed to it from the given data in lists.json.
    Then pass control back to the code that called it by using a callback function.
*/

const boards = require('./data/boards_1.json')
const lists = require('./data/lists_1.json')

function listBoard (boardId, lists) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (Object.hasOwnProperty.call(lists, boardId)) {
        resolve(lists[boardId])
      } else {
        reject('Not Found')
      }
    }, 2000)
  })
}

module.exports = listBoard

