const
  express = require('express'),
  router = express.Router();

const
  Event = require('../../db/models/Event');

router.route('/')
  .get((request, response) => {
    //get events list from db
    return Event.forge()
      .fetchAll({
        withRelated: ['icon']
      })
      .then((events) => {
        console.log('\n\n\n\n' + events.toJSON());
        return response.status(200).json(events);
      })
      .catch((error) => {
        console.log(error);
        //save to db
        return;
      })
  })
module.exports = router;