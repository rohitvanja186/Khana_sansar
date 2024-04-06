
const express = require('express');
const app = express();
const cors = require("cors");
const { users, donations } = require('./Model/Index');
const { register } = require('./Controller/authController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { where } = require('sequelize');

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

// Donation route 
app.post('/donate', async (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      const gettingDecryptedToken = jwt.verify(token, process.env.SECRETKEY);
      console.log("token", gettingDecryptedToken);
  
      const { donorName, phoneNumber, foodName, foodType, location, description, foodQuantity } = req.body;
  
      const userssss = await users.findByPk(gettingDecryptedToken.id);
  
      const addDonate = await donations.create({
        donorName: donorName,
        phoneNumber: phoneNumber,
        foodName: foodName,
        foodType: foodType,
        location: location,
        foodQuantity: foodQuantity,
        description: description,
        userID: userssss.ID
      });
  
      res.status(200).json({ message: "Donation added successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
 app.get('/getDonationData', async(req,res)=>{
    
    const getData = await donations.findAll();
    // console.log(getData);
    res.send(getData);

 })



 app.get('/detail/:id', async (req, res) => {
    try {
        const id = req.params.id;
      

        const getData = await donations.findAll({
            where: {
                ID: id
            }
        });
        // console.log(getData);
        res.send(getData);

       
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).send("Internal Server Error");
    }
});



  
  
app.delete('/delete/:id',async (req,res)=>{

    const id = req.params.id


    const deleteRequest = await donations.destroy({
        where :{
            ID : id
        }
    })
    res.send('success delete')

})


app.get('/editrender/:id', async (req,res)=>{

    const id = req.params.id
    console.log(id)

    const getData = await donations.findAll({
        where :{
            ID : id
        }
    })
  res.send(getData)



})

app.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const {
      editDonorName,
      editFoodName,
      editDescription,
      editFoodQuantity,
      editFoodType,
      editLocation,
      editPhoneNumber
    } = req.body;
  
    try {
      const edit = await donations.update(
        {
          donorName: editDonorName,
          phoneNumber: editPhoneNumber,
          foodName: editFoodName,
          foodType: editFoodType,
          location: editLocation,
          foodQuantity: editFoodQuantity,
          description: editDescription,
        
        },
        {
          where: {
            ID: id
          }
        }
      );
  
      console.log('Update successful');
      res.status(200).send('Update successful');
    } catch (error) {
      console.error('Error updating data:', error);
      res.status(500).send('Internal Server Error');
    }
  });
  





app.get('/detailed/:id',async (req,res)=>{

  const id = req.params.id;

try {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const gettingDecryptedToken = jwt.verify(token, process.env.SECRETKEY);
    console.log("token", gettingDecryptedToken);


    const data = await donations.findAll({
        where :{
            userID : gettingDecryptedToken.id,
            ID : id
        }
    })
 if(data.length > 0){
    res.json("show btn")
 }

} catch (error) {
    console.log(error)
}

  })









// Server listening

app.listen(3000, () => {
console.log('Server is listening on port ');
});