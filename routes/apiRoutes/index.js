const router = require('express').Router();
const notesRoutes = require('./apiRoutes')

router.use(apiRoutes);

module.exports = router;
