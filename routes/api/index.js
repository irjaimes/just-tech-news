// this file packages and organizes all api endpoints 

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')
const commentRoutes = require('./comment-routes');

// consolidate routes to 
// const apiRoutes = require('./api');

// consolidate router uses to
// router.use('/api', apiRoutes);

// error handling
//  router.use((req, res) => {
//  res.status(404).end();
//  }); 

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

