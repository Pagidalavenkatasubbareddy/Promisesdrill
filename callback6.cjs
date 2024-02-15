/* 
	Problem 6: Write a function that will use the previously written functions 
    to get the following information. You do not need to pass control back to the
    code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for all lists simultaneously
*/

const lists = require('./data/lists_1.json')
const boards = require('./data/boards_1.json')
const cards = require('./data/cards_1.json')

const BoardsInfo = require('./callback1.cjs')
const listsBoard = require('./callback2.cjs')
const cardDetailsListId = require('./callback3.cjs')

const boardID = 'mcu453ed'

function allCardsandalllists () {
  BoardsInfo(boards, boardID)
    .then(board => {
      console.log(board)
      const boardId = board.id
      console.log('board : ', boardId)
      return listsBoard(boardId, lists)
    })
    .then(listOfBoard => {
      console.log('list board : ', listOfBoard)
      const list = listOfBoard.map(ele => ele.id)
      console.log(list)
      return list
    })
    .then(list => {
      list.map(ele => {
        cardDetailsListId(ele, cards)
          .then(res => {
            console.log(`\n ${ele} :`, res)
          })
          .catch(err => {
            console.log(err)
          })
      })
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = allCardsandalllists;

