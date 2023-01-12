const db = require('./index.js');

module.exports = {

  eraseTables: async () => {

    // turn key checks on / off
    let keyChecks = (position) => {
      return new Promise ((resolve, reject) => {
        db.connection.query(`SET FOREIGN_KEY_CHECKS = ${position}`, (err, results) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(results);
          }
        });
      });
    }

    // clear input table
    let cleanTable = (table) => {
      return new Promise((resolve, reject) => {
        db.connection.query(`TRUNCATE TABLE ${table}`, (err, results) => {
          if (err) {
            return reject(err);
          } else {
            return resolve(results);
          }
        });
      });
    };

    // await keyChecks(0);
    let tableNames = ['pokemon', 'types', 'pokemon_and_types'];
    await Promise.all(tableNames.map(name => cleanTable(name)));
    // await keyChecks(1);
  },

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

  addTypes: (types) => {
    return new Promise((resolve, reject) => {

      let queryString = "INSERT INTO types (name) VALUES "
      let i = 1;
      for (let t of types) {
        if (i === types.length) {
          valList = `("${t.name}")`
        } else {
          valList = `("${t.name}"), `
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

  addGames: (games) => {
    return new Promise((resolve, reject) => {

      let queryString = "INSERT INTO games (name) VALUES "
      let i = 1;
      for (let g of games) {
        if (g === games.length) {
          valList = `("${g.name}")`
        } else {
          valList = `("${g.name}"), `
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
  }

  addHms: () => {
    return new Promise((resolve, reject) => {

      const HMs = [
        { id: 1, name: 'cut' },
        { id: 2, name: 'fly' },
        { id: 3, name: 'surf' },
        { id: 4, name: 'strength' },
        { id: 5, name: 'flash' },
        { id: 6, name: 'whirlpool' },
        { id: 7, name: 'waterfall' },
        { id: 8, name: 'rock smash' },
        { id: 9, name: 'dive' },
        { id: 10, name: 'defog' },
        { id: 11, name: 'rock climb' }
      ]

      let queryString = "INSERT INTO hms (name) VALUES "
      let i = 1;
      for (let h of hms) {
        if (h === hms.length) {
          valList = `("${h.name}")`
        } else {
          valList = `("${h.name}"), `
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
  }

  addPokemonType: (p_id, t_id) => {
    return new Promise((resolve, reject) => {
      let queryString = `INSERT INTO pokemon_and_types (pokemon_id, type_id) VALUES (${p_id}, ${t_id})`;
      db.connection.query(queryString, (err, results) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(results);
        }
      })
    })
  },

  getNPokemon: async (n) => {

    var query1 = (id) => {
      return new Promise((resolve, reject) => {
        db.connection.query(
          `SELECT * FROM pokemon WHERE id = ${id}`,
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

    var query2 = (id) => {
      return new Promise((resolve, reject) => {
        db.connection.query(
          `SELECT name FROM types RIGHT JOIN pokemon_and_types ON types.id = pokemon_and_types.type_id WHERE pokemon_id = ${id}`,
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

    let pokemon = []
    for (let i = 1; i <= n; i++) {
      let p = await query1(i);
      let types = await query2(i);
      p[0].types = types.map(t => t.name);
      pokemon.push(p[0]);
    }
    return pokemon;

  }

}