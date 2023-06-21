'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('material', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.BIGINT
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
			lote: {
                allowNull: false,
                type: Sequelize.STRING
            },
			formulaQui: {
                allowNull: false,
                type: Sequelize.STRING
            },
			concentration: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
			peso: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
			marca: {
                allowNull: false,
                type: Sequelize.STRING
            },
			quantidade: {
                allowNull: false,
                type: Sequelize.DOUBLE
            },
			estoque: {
                allowNull: false,
                type: Sequelize.STRING
            },
			observation: {
                allowNull: false,
                type: Sequelize.TEXT
            },
			dtValid: {
                allowNull: false,
                type: Sequelize.DATE
            },
			dtEntrad: {
                allowNull: false,
                type: Sequelize.DATE
            },
            metric: {
                allowNull: false,
                type: Sequelize.STRING
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('material');
    }
};
