import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js'



// @desc      Register a New User
// @route     POST  /api/adminUser
// @access    Private/Admin
const registerAdminUser = asyncHandler(async(req, res) => {

    const { name, email, password } = req.body;
 
    const userExists = await User.findOne({ email: email })
 
    if(userExists) {
        res.status(400);
        throw new Error('User already Exists')
    }

    const user = await User.create({
        name,
        email, 
        password
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
 })


 // @desc      Auth User & Get Token
// @route     POST  /api/adminUser/login
// @access    Public
const authAdminUser = asyncHandler(async(req, res) => {

    const { email, password } = req.body;
 
    const user = await User.findOne({ email: email })
 
    if(user && (await user.matchPassword(password))) {
         res.json ({
             _id: user._id,
             name: user.name,
             email: user.email,
             isAdmin: user.isAdmin,
             token: generateToken(user._id)
         })
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password')
    }
 })


 export {
    registerAdminUser,
    authAdminUser
 }
