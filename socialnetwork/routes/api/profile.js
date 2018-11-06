const express = require('express');
const router = express.Router();



// @route   GET api/profile/test
// @desc    Tests post route
// @acess   public
router.get('/test', (req,res) => {
    return res.json({
        'msg': 'Profile Works!'
    });
})

module.exports = router;