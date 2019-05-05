const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'jurassic_ice_cream_db',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});

// Define Dinosaur Model
const Dinosaur = db.define('dinosaur', {
  name: Sequelize.STRING,
  height: Sequelize.INTEGER,
  period: Sequelize.STRING,
})

// Define Flavor Model
const Flavor = db.define('flavor', {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  on_sale: Sequelize.BOOLEAN,
})

// db.sync()

module.exports = {
  db,
  Dinosaur,
  Flavor,
}