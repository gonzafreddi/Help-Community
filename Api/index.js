const server = require('./src/app.js');
const { conn } = require('./src/db.js');


conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('Port listening at 3001'); 
  });
});