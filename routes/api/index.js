const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;

const commentRoutes = require('./comment-routes');

router.use('/comments', commentRoutes);