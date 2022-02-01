const express = require('express');
const router = express.Router();

require('./routes/investors')(router);
require('./routes/stocks')(router);

module.exports = router;