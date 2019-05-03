const
  express = require('express'),
  router = express.Router();

const
  Bookshelf = require('../../db/models/bookshelf');
Event = require('../../db/models/Event');

router.route('/')
  .get((request, response) => {
    //get events list from db
    console.log('\n\n\nsmoketest');
    const Events = new Bookshelf.Collection.extend({
      model: Event
    });
    return new Events
      .fetch({
        withRelated: ['icon']
      })
      .then((events) => {
        console.log(events);
        return response.status(200).json(events);
      })
      .catch((error) => {
        //save to db
        return;
      })
  })

module.exports = router;