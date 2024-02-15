const lists = require('../data/lists_1.json')
const boards = require('../data/boards_1.json')
const cards = require('../data/cards_1.json')

const cardDetailsListId = require('../callback3.cjs')

const listId = 'qwsa221'
cardDetailsListId(listId, cards)
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.log(err)
  })

