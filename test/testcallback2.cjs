const lists = require('../data/lists_1.json')
const boards = require('../data/boards_1.json')
const listsBoard = require('../callback2.cjs')

const boardId = 'mcu453ed'

listsBoard(boardId, lists)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })

