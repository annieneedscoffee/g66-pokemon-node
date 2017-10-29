var knex = require('../db/knex.js');

module.exports = {

  main: function(req, res, next) {
    res.redirect('/pokemon');
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

  edmon: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .update({
      name: req.body.name,
      cp: req.body.cp,
      in_gym: req.body.in_gym,
      trainer_id: req.body.trainer_id
    })
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
    .then((trainresult)=>{
      knex('pokemon')
      .where('trainer_id', req.params.id)
      .then((pokeresults)=>{
      res.render('showtrainers', {trainers: trainresult[0], pokemon: pokeresults});
    })
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

  gym2: function(req, res){
    knex('pokemon').then((result)=>{
      res.render('gym2', {pokemon: result})
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  gymmon1: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .update({
    in_gym: true
      })
    .then((result)=>{
      console.log(result);
      res.redirect("/gym")
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  togym: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .update({
    in_gym: true
      })
    .then((result)=>{
      console.log(result);
      res.redirect("/pokemon")
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  fromgym: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .update({
    in_gym: false
      })
    .then((result)=>{
      console.log(result);
      res.redirect("/pokemon")
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  gymmon: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .update({
    in_gym: true
      })
    .then((result)=>{
      console.log(result);
      res.redirect("/gym2")
    })
    .catch((err)=>{
      console.error(err)
    });
  },

  del: function(req, res){
    knex('pokemon')
    .where('id', req.params.id)
    .del()
    .then((result)=>{
      console.log(result);
      res.redirect("/pokemon")
    })
    .catch((err)=>{
      console.error(err)
    });
  },
};
