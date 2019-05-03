const
  express = require('express'),
  router = express.Router();

const
  Bookshelf = require('../../db/models/bookshelf'),
  Event = require('../../db/models/Event');

router.route('/')
  .get((request, response) => {
    //get events list from db
    const Events = new Bookshelf.Collection({
      model: Event
    });

    console.log('\n\n\n' + Events);
    return new Events
      .fetch({
        withRelated: ['icon']
      })
      .then((events) => {
        console.log('\n\n\n\n' + events);
        return response.status(200).json(events);
      })
      .catch((error) => {
        //save to db
        return;
      })
  })

module.exports = router;