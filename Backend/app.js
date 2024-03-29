const express = require('express')
const app = express();

const cors = require("cors");
const { users } = require('./Model/Index');
const { register } = require('./Controller/authController');
require('sequelize')
const bcrypt = require('bcrypt')


app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

require('./Model/Index')

//form bata aako value lai handel garna
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', register)


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await users.findOne({
            where:
            {
                Email: email
            }
        });

        if (!user) {
            console.log('Email not found');
            return res.send('Email not found');
        }

        const passwordMatch = bcrypt.compareSync(password, user.Password);

        if (!passwordMatch) {
            console.log('Password does not match');
            return res.send('Password does not match');
        }

        console.log('Login successful');
        res.send('Login successful');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('listening on')
})