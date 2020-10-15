const { use } = require('../Router/userRouter');
const connection = require('./../DataBase/dbConnection');
const catchAsync = require('./../utils/catchAsync');

exports.createUser = catchAsync(async(req, res) => {
    const {username, email, password} = req.body;

    const insertData = {
        username: username,
        email: email,
        password: password
    };

    let query = 'SELECT * FROM users';
    let response;

    // checking for the duplicate username
    let count = 0;
    response = await connection.query(query);
    response[0].forEach((item) => {
        if(item.username === username){
            count++;
        }
    });
    if(count)
    return res.send('username is already exists');

    query = 'INSERT INTO users SET ?';
    response = await connection.query(query, insertData);
    return res.send(response);
});

exports.getUser = catchAsync(async(req,res) => {
    let query = 'SELECT * FROM users';

    let response;
    response = await connection.query(query);
 
    return res.status(200).json({ 
        status: 'success',
        results: response[0].length,
        data: response[0]
    });
});

exports.viewUser = catchAsync(async(req, res) => {
    const id = req.params.id;
    let query = `SELECT * FROM users WHERE id=${id}`;

    let response;
    response = await connection.query(query, [id]);
    res.status(200).json({
        status: "success",
        results: response[0].length,
        data: response[0]
    });
});

exports.updateUser = catchAsync(async(req,res) => {
    const id = req.params.id;
    const username = req.params.body;
    let query = "UPDATE users SET username=? WHERE ID=?";

    let response;
    response = await connection.query(query, [username, id]);
    res.status(200).json({
        status: "success",
        results: response[0].length,
        data: response[0]
    });
});

exports.deleteUser = catchAsync(async(req, res)=> {
    const id = req.params.id;
    let query = "DELETE FROM users WHERE id=?";

    let response;
    response = await connection.query(query, [id]);
    res.status(204).json({
        status: "success",
        results: response[0].length,
        data: null
    });
});