module.exports = {
    HOST: "localhost",
    USER: "root",
    PASWORD: "",
    DB:"sequelize",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};