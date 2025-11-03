const express=require('express')

const router=express.Router()





// import the controller 
const authRouter=require('../controllers/authController')



//and route them with the different paths
router.post('/sign',authRouter)

export default router;