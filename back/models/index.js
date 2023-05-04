'use strict';
import {Sequelize, DataTypes} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config()

const config = {
    "username": process.env.MYSQL_DATABASE_USER,
    "password": process.env.MYSQL_DATABASE_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": "127.0.0.1",
    "dialect": "mysql",
    "use_env_variable": false
}


export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    freezeTableName: true
});


export * from './user.js'
export * from './lab.js'
export * from './appointment.js'
export * from './material.js'
export * from './appointment-material.js'
