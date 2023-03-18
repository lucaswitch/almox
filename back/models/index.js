'use strict';
import {User} from './definitions'
import Sequelize from 'sequelize'
import process from 'process'
const config = {
    "username": process.env.MYSQL_DATABASE_USER,
    "password": process.env.MYSQL_DATABASE_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": false
}

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.database.username, config.database.password, config);
}

const db = {};
db[User.name] = User(sequelize);

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
module.exports = db;
