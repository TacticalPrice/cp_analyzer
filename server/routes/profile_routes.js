const express =  require('express');
const {getProfileData}  = require('../controllers/profile_controller');

const router = express.Router();

router.get('/:handle' , getProfileData);

module.exports = router;