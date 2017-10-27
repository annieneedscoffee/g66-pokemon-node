//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");

module.exports = function(app){

  app.get('/', index.main);
  app.get('/pokemon', index.pkmn);
  app.get('/show/pokemon/:id', index.shw);
  app.get('/edit/pokemon/:id', index.edit);
  app.get('/add/pokemon', index.added);
  app.post('/add/pokemon', index.nmon);
  app.get('/trainers', index.train);
  app.get('/show/trainers/:id', index.shwtr);
  app.get('/gym', index.gym);
}
