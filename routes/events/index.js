const
  express = require('express'),
  router = express.Router();

const
  knex = require('../../db/knex');

router.route('/')
  .get((request, response) => {
    //get events list from db
    const query = knex.select('*').from('events').leftJoin('icons', 'events.icon_id', 'icons.id');
    console.log('\n\n\n' + query);
    return response.status(200).json(query);
  })
module.exports = router;