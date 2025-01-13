let express = require('express')
let {orderAdd,fetchOrderByUserId} = require('../controllers/orderControllers.js')
let router = express.Router()
router.post('/orderAdd',orderAdd)
router.post('/fetchOrderByUserId',fetchOrderByUserId)

module.exports = router