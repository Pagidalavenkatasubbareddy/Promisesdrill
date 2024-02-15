const boards = require('./data/boards_1.json')

/* 
	Problem 1: Write a function that will return a particular board's information
    based on the boardID that is passed from the given list of boards in boards.json 
    and then pass control back to the code that called it by using a callback function.
*/

function BoardsInfo (boards, boardID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const board = boards.find(board => board.id === boardID)
      if (!board) {
        reject('not found')
      }
      resolve(board)
    }, 2000)
  })
}

module.exports = BoardsInfo

