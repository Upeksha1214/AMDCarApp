const express = require('express')
const router = express.Router()

router.post('/addDetails', async (req, res) => {
    console.log(req.body.title)
    console.log(req.body.desc)
    console.log(req.body.image)

//     console.log("labuna")
    res.json({ code: "200", message: "Saved Details", data: null })
// });

// router.get('/', async (req, res) => {
//     console.log("requst eka labuna")
//     res.json({ code: '500', message: 'delete post Faild', data: null })
});

module.exports = router