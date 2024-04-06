module.exports = (sequelize, DataTypes) => {
    const Donation = sequelize.define("donation", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
       donorName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foodQuantity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
    phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
       

    });
    return Donation;
};