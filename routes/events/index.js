const
  express = require('express'),
  router = express.Router();

const
  Event = require('../../db/models/Event');

router.route('/')
  .get((request, response) => {
    //get events list from db

    return new Event()
      .fetchAll({
        withRelated: ['icon']
      })
      .then((events) => {
        console.log(events);
        return;
      })
      .catch((error) => {
        return response.status(500).json(error);
      });
  })

module.exports = router;