const db = require('./db.js');

module.exports = {

  insertPokemon: (p, cb) => {
    const queryString = "INSERT INTO pokemon (`order`, `name`, `default_picture`) VALUES (?, ?, ?)";
    const queryArgs = [p.order, p.name, p.default_picture];
    db.connection.query(queryString, queryArgs, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        cb(results);
      }
    }
    );
  },

  // [{}, {}, {}]
  addAllPokemon: (pokemons) => {
    return new Promise((resolve, reject) => {

      let queryString = "INSERT INTO pokemon (`order`, `name`, `default_picture`) VALUES "
      let i = 1;
      for (let p of pokemons) {
        if (i === pokemons.length) {
          valList = `(${p.order}, "${p.name}", "${p.default_picture}")`
        } else {
          valList = `(${p.order}, "${p.name}", "${p.default_picture}"), `
        }
        queryString += valList;
        i++;
      }

      db.connection.query(queryString, (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
      });
    });
  },

  getAllPokemon: () => {
    return new Promise((resolve, reject) => {
      db.connection.query(
        "SELECT * FROM pokemon",
        (err, results) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(results);
          }
        }
      );
    });
  }

}