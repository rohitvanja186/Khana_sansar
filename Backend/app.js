
const express = require('express');
const app = express();
const cors = require("cors");
const { users, donations } = require('./Model/Index');
const { register } = require('./Controller/authController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

// Import environmental variables if required
require('dotenv').config();

// Use cors middleware
app.use(cors({
origin: 'http://localhost:5173',
credentials: true
}));

// Use cookie-parser middleware
app.use(cookieParser());

// Use JSON and URL encoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Register route
app.post('/register', register);

// Login route
app.post('/login', async (req, res) => {
const { email, password } = req.body;

try {
const user = await users.findOne({
    where: { Email: email }
});

if (!user) {
    console.log('Email not found');
    return res.status(404).send('Email not found');
}

const passwordMatch = bcrypt.compareSync(password, user.Password);

if (!passwordMatch) {
    console.log('Password does not match');
    return res.status(401).send('Password does not match');
}

// Generate JWT token
const token = jwt.sign({ id: user.ID }, process.env.SECRETKEY, { expiresIn: "30d" });
res.json({token}) 


console.log('Login successful');



} catch (error) {
console.error('Error:', error);
res.status(500).send('Internal Server Error');
}
});

// Donation route (example)
app.post('/donate', async (req, res) => {
// Example route, implement donation logic here

const token =  req.headers.authorization?.split(' ')[1]; //if header ma suthorization aaeraxa vaney tya vako content lai split gardey ani tya bata 1 index ko lai lee vanya ho which means token ho 
//  0 aneko Bearer ho
//1 vaneko token ho i mean userID which we are sending from donate.jsx 
// console.log("token" ,token)

const gettingDecryptedToken = jwt.verify(token, process.env.SECRETKEY)
console.log("token",gettingDecryptedToken)
const { donorName, phoneNumber, foodName, foodType, location, description,foodQuantity } = req.body;



const userssss = await users.findByPk(gettingDecryptedToken.id)
// console.log(userssss)


const addDonate = await donations.create({
donorName : donorName,
phoneNumber : phoneNumber,
foodName :foodName,
foodType :foodType,
location : location,
foodQuantity : foodQuantity,
description : description,
userID : userssss.ID
})




// Logic to handle donation data
});

// Server listening

app.listen(3000, () => {
console.log('Server is listening on port ');
});