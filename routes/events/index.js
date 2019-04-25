const
  express = require('express'),
  router = express.Router();

router.route('/')
  .get((request, response) => {
    //get events list from db
    const events = [];

    events.push({
      id: 1,
      description: 'Hello',
      icon_id: 2
    });

    events.push({
      id: 2,
      description: 'Goodbye',
      icon_id: 2
    });

    return response.status(200).json({
      body: events
    });
  })

module.exports = router;