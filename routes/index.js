const
  express = require('express'),
  router = express.Router();

const
  webhook = require('./webhook'),
  events = require('./events');

router.use('/events', events);
router.use('/webhook', webhook);

module.exports = router;