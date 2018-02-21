const Sequelize = require('sequelize')
const db = require('../db')

const OrderProduct = db.define('orderProduct', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    currentPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    subtotal: {
        type: Sequelize.VIRTUAL,
        get() {
            return this.currentPrice * this.quantity
        },
    },
})

module.exports = OrderProduct
