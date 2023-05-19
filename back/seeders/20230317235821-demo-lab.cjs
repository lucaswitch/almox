"use strict";
const moment = require("moment");
const {Lab} = require("../models/lab.js")

console.log('LAB', Lab)

/** @type {import("sequelize-cli").Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(Lab.tableName, [
            {
                name: "Laboratório A",
                created_at: moment().utc().format("YYYY/MM/DD HH:mm:ss"),
                updated_at: moment().utc().format("YYYY/MM/DD HH:mm:ss")
            }, {
                name: "Laboratório B",
                created_at: moment().utc().format("YYYY/MM/DD HH:mm:ss"),
                updated_at: moment().utc().format("YYYY/MM/DD HH:mm:ss")
            },
            {
                name: "Laboratório C",
                created_at: moment().utc().format("YYYY/MM/DD HH:mm:ss"),
                updated_at: moment().utc().format("YYYY/MM/DD HH:mm:ss")
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(Lab.tableName, null, {});
    }
};
