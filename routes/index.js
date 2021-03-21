const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
// this file is needed  so that api requests can be made to this file, instead of multiple files with different endpoints
// this file packages the api routes and prefixes them with the path /api
// it also sets up error validation if there's a request to an api endpoint that doesn't exist