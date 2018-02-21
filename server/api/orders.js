const router = require('express').Router()
const { Order } = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Order.findAll()
    .then(orders => res.json(orders))
    .catch(next)
})

router.get('/:orderId', (req, res, next) => {
  Order.findOne(req.params.orderId)
    .then(order => res.json(order))
    .catch(next)
})

// router.get('/:userId', (req, res, next) => {
//   Order.findOne({
//     where: {
//       userId: req.params.userId,
//       status: 'open',
//     },
//   })
// })

router.post('/', (req, res, next) => {
  Order.create(req.body)
    .then(order => res.json(order))
    .catch(next)
})

// updating order by adding items or checking out
router.put('/:orderId', (req, res, next) => {
  Order.findOne(req.params.orderId)
    .then(order => order)
    .then(updatedOrder => res.json(updatedOrder))
    .catch(next)
})
