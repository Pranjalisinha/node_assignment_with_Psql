const pgp = require('pg-promise')({
    query: e => {
      console.log('QUERY:', e.query);
    }
  });
  
  const options = {
    host: 'localhost',
    database: 'Ranking'
  };
  
  const db = pgp(options);
  console.log("Database connected succesfully")
  
  module.exports = db;