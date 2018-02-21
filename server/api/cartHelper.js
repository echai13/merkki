const db = require('../db')
const Order = db.model('order')

const cartHelper = (req, res, next) => {
  if (req.cart) return next()

  if (req.session.cartId) {
    const cartId = req.session.cartId
    return Order.findById(cartId)
      .then(order => {
        req.cart = order
        return next()
      })
      .catch(next)
  }

  if (req.user) {
    return Order.findOrCreate({
      where: {
        userId: req.user.id, status: 'open',
      },
    })
      .then(([order, _]) => {
        req.cart = order;
        req.session.cartId = order.id;
        return next();
      })
      .catch(next)
  }
}

module.exports = cartHelper
