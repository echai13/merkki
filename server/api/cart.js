const router = require('express').Router()
const cartHelper = require('./cartHelper');
const { OrderProduct, Order } = require('../db/models')

module.exports = router

router.use(cartHelper)

router.get('/', (req, res, next) => {
  res.json(req.cart)
})

router.post('/orderProduct', (req, res, next) => {
  const { currentPrice, quantity, productId } = req.body.product
  OrderProduct.create({
    currentPrice, quantity, productId, orderId: req.cart.id,
  })
    .then(_ => {
      Order.findById(req.cart.id)
        .then(order => {
          req.cart = order
          res.json(req.cart)
        })
    })
})

router.put('/updateQuantity', (req, res, next) => {
  const { quantity, productId } = req.body.product

  OrderProduct.update({ quantity }, {
    where: { productId, orderId: req.cart.id },
    returning: true,
    plain: true,
   })
   .then(orderItem => res.json(orderItem))
   .catch(next)
})
