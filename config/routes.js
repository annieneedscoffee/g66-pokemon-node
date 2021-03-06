//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js");

module.exports = function(app){

  app.get('/', index.main);
  app.get('/pokemon', index.pkmn);
  app.get('/show/pokemon/:id', index.shw);
  app.get('/edit/pokemon/:id', index.edit);
  app.post('/edit/pokemon/:id', index.edmon);
  app.get('/add/pokemon', index.added);
  app.post('/add/pokemon', index.nmon);
  app.get('/trainers', index.train);
  app.get('/show/trainers/:id', index.shwtr);
  app.get('/gym', index.gym);
  app.get('/pokemon/delete/:id', index.del);
  app.get('/gym2', index.gym2);
  app.get('/addthismon/:id', index.gymmon);
  app.get('/addthismon1/:id', index.gymmon1);
  app.get('/addthismontogym/:id', index.togym);
  app.get('/removegym/:id', index.fromgym);
  app.get('/battle/:id', index.battle);
  app.get('/reset', index.reset);
  
}
