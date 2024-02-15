/* 
	Problem 5: Write a function that will use the previously written functions
    to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/

const lists = require('./data/lists_1.json')
const boards = require('./data/boards_1.json')
const cards = require('./data/cards_1.json')

const BoardsInfo = require('./callback1.cjs')
const listsBoard = require('./callback2.cjs')
const cardDetailsListId = require('./callback3.cjs')

const boardID = 'mcu453ed'

function mindSpace () {
  BoardsInfo(boards, boardID)
    .then(board => {
      console.log(board)
      const boardId = board.id
      console.log('board : ', boardId)
      return listsBoard(boardId, lists)
    })
    .then(listOfBoard => {
      console.log('list board : ', listOfBoard)
      const listMind = listOfBoard.filter(ele => ele.name === 'Mind')
      const listSpace = listOfBoard.filter(ele => ele.name === 'Space')
      list = [listMind[0].id, listSpace[0].id]
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

module.exports = mindSpace;

