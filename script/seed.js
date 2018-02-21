const db = require('../server/db')
const { User, Product } = require('../server/db/models')

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
  ])
  console.log(`seeded ${users.length} users`)

  const products = await Promise.all([
    Product.create({
      title: `Men's Luxury Socks`,
      description: `These are made with 98% cotton and 2% spandex`,
      quantity: 20,
      price: 1599,
      details: ['Hand wash for optimal care', 'Comes in various packs'],
    }),
    Product.create({
      title: `Women's Luxury Socks`,
      description: `These are made with 98% cotton and 2% spandex`,
      quantity: 20,
      price: 1399,
      details: ['Hand wash for optimal care', 'Comes in various packs'],
    }),
    Product.create({
      title: `Women's Super Opaque Leggings`,
      description: `These are made with Spandex and Polyester`,
      quantity: 20,
      price: 1399,
      details: ['Hand wash for optimal care', 'Comes in four colors'],
    }),
  ])
  console.log(`seeded ${products.length} products`)

  console.log(`seeded successfully`)
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })
  .then(() => {
    console.log('closing db connection')
    db.close()
    console.log('db connection closed')
  })

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...')
