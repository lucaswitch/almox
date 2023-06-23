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
                allowNull: true,
                type: Sequelize.STRING
            },
			formulaQui: {
                allowNull: true,
                type: Sequelize.STRING
            },
			concentration: {
                allowNull: true,
                type: Sequelize.DOUBLE
            },
			peso: {
                allowNull: true,
                type: Sequelize.DOUBLE
            },
			marca: {
                allowNull: true,
                type: Sequelize.STRING
            },
			quantidade: {
                allowNull: true,
                type: Sequelize.DOUBLE
            },
			estoque: {
                allowNull: true,
                type: Sequelize.STRING
            },
			observation: {
                allowNull: true,
                type: Sequelize.TEXT
            },
			dtValid: {
                allowNull: true,
                type: Sequelize.DATE
            },
			dtEntrad: {
                allowNull: true,
                type: Sequelize.DATE
            },
            metric: {
                allowNull: true,
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
