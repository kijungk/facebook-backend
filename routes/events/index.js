const
  express = require('express'),
  router = express.Router();

const
  knex = require('../../db/knex');

router.route('/')
  .get((request, response) => {
    //get events list from db
    return knex.select('*').from('events').leftJoin('icons', 'events.icon_id', 'icons.id')
      .then((results) => {
        console.log('\n\n\n' + results);
      })
  })
module.exports = router;