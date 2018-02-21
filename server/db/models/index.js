const User = require('./user')
const Product = require('./product')
const Order = require('./order')
const OrderProduct = require('./orderProducts')

Order.hasMany(Product)
User.hasMany(Order)
Order.belongsTo(User)

Product.belongsToMany(Order, { through: OrderProduct })


module.exports = {
  User,
  Order,
  Product,
  OrderProduct,
}
