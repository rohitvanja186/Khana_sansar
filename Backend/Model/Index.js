const dbconfig = require('../Config/dbconfig');

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD,{
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    operatorsAliases: false,
    pool:{
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.acquire,
        idle: dbconfig.pool.idle,
    },

});

sequelize
    .authenticate()
    .then(()=>{
        console.log("CONNECTED!!")
    })

    .catch((err)=>{
        console.log("Error" + err);
    });

    const db = {};


    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
  

db.users= require('./userModel.js')(sequelize, DataTypes);
db.donations= require('./donationModel.js')(sequelize, DataTypes);

    
db.users.hasMany(db.donations)  //one user can do many donation
    db.donations.belongsTo(db.users)
   

db.sequelize.sync({ force: false}).then(() =>{
    console.log("Database connection done successfully")
})

module.exports = db;