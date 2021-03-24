const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes')

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;

// this file packages and organizes all api endpoints 