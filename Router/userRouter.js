const express = require('express');

const router = express.Router();

const User = require('./../Controller/userController');

router.route('/api/v1/user/create').post(User.createUser);

router.route('/api/v1/user/lists').get(User.getUser);

router.route('/api/v1/user/:id/views').get(User.viewUser);

router.route('/api/v1/user/:id/update').get(User.updateUser);

router.route('/api/v1/user/:id/delete').get(User.deleteUser);


module.exports=router;