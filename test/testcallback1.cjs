const BoardsInfo = require('../callback1.cjs')
const boards = require('../data/boards_1.json')
const boardID = 'mcu453ed'

BoardsInfo(boards, boardID)
  .then(board => {
    console.log(board)
    return
  })
  .catch(err => {
    console.log(err)
  })

