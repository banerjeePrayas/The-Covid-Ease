import asyncHandler from 'express-async-handler';   //Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.
import User from '../models/user.js';
import generateToken from '../utils/generateToken.js'



// @desc      Register a New User
// @route     POST  /api/adminUser/register
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


// @desc      Get All Users
// @route     GET  /api/adminUser
// @access    Private/admin
const getUsers = asyncHandler (async (req, res) => {

    const users = await User.find({});

    res.json(users)
 })


 // @desc      Fetch Single User
// @route     GET  /api/adminUser/:id
// @access    Private/admin
const getUserById = asyncHandler(async(req, res) => {

    const user = await User.findById(req.params.id)
    
    if(user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User Not Found' });
    }
})



// @desc      Update User
// @route     PUT  /api/adminUser/:id
// @access    Private/admin
const updateUser = asyncHandler (async (req, res) => {

    const user = await User.findById(req.params.id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.isAdmin = req.body.isAdmin || user.isAdmin;

        const updatedUser = await user.save();

        res.json ({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin
        })
    } else {
        res.status(404);
        throw new Error('User Not Found');
    }
 })



 // @desc      Delete User
// @route     DELETE  /api/adminUser/:id
// @access    Private/admin
const deletetUser = asyncHandler (async (req, res) => {

    const user = await User.findById(req.params.id);

    if(user) {
        await user.remove();
        res.json({
            message: 'User Removed'
        })
    } else {
        res.status(404);
        throw new Error('User Not Found')
    }
 })



 export {
    registerAdminUser,
    authAdminUser,
    getUsers,
    getUserById,
    updateUser,
    deletetUser
 }
