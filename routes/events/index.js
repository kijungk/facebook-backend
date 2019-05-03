const
  express = require('express'),
  router = express.Router();

const
  knex = require('../../db/knex');

router.route('/')
  .get((request, response) => {
    //get events list from db
    return knex.select('*').from('events').leftJoin('icons', 'events.icon_id', 'icons.id')
      .then((events) => {
        if (!events.length) {
          //no events in database
          //handle by sending some information to user
        }

        return response.status(200).json(events);
      })
      .catch((error) => {
        //save error to db
        return response.status(500).json(error);
      });
  })
module.exports = router;