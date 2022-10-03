const db = require('./db.js');

module.exports = {

  insertPokemon: () => {
    db.connection.query(
      "INSERT INTO pokemon (`order`, `name`, `default_picture`) VALUES (1, 'bulbasaur', 'picture')",
      (err, results) => {
        if (err) {
          console.log(err)
        }
      }
    );
  },

  getAllPokemon: (cb) => {
    db.connection.query(
      "SELECT * FROM pokemon",
      (err, results) => {
        if (err) {
          console.log(err)
        } else {
          cb(results)
        }
      }
    );
  }

}