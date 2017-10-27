var knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.render('index', { title: 'Express' });
  },

  pkmn: function(req, res){
    knex('pokemon').then((result)=>{
      res.render('pkmn', {pokemon: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  shw: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .then((result)=>{
      console.log("my result", result)
    res.render('showpkmn',{pokemon: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  edit: function(req, res, next){
    knex('pokemon')
    .where('id', req.params.id)
      .then((result)=>{
        res.render('editpkmn', {pokemon: result[0]})
      })
    .catch((err)=>{
      console.error(err)
    });
  },

  added: function(req, res, next){
    res.render('addpkmn', {title: 'Express'});
  },

  nmon: function(req, res){
    knex('pokemon')
    .insert({
      name: req.body.name,
      cp: req.body.cp,
      in_gym: req.body.in_gym,
      trainer_id: req.body.trainer_id
    }, "*")
    .then((result)=>{
      console.log(result);
      res.redirect("/pokemon")
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  train: function(req, res){
    knex('trainers').then((result)=>{
      res.render('trainers', {trainers: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  shwtr: function(req, res){
    knex('trainers')
  .where('id', req.params.id)
    .then((result)=>{
      res.render('showtrainers', {trainers: result[0]})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  gym: function(req, res){
    knex('pokemon').then((result)=>{
      res.render('gym', {pokemon: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },
};
