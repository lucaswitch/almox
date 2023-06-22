import {DataTypes} from "sequelize";
import {sequelize} from "./index.js";

export const Material = sequelize.define('material', {
			name: {
                allowNull: false,
                type: DataTypes.STRING
            },
			lote: {
                allowNull: false,
                type: DataTypes.STRING
            },
			formulaQui: {
                allowNull: false,
                type: DataTypes.STRING
            },
			concentration: {
                allowNull: false,
                type: DataTypes.DOUBLE
            },
			peso: {
                allowNull: false,
                type: DataTypes.DOUBLE
            },
			marca: {
                allowNull: false,
                type: DataTypes.STRING
            },
			quantidade: {
                allowNull: false,
                type: DataTypes.DOUBLE
            },
			estoque: {
                allowNull: false,
                type: DataTypes.STRING
            },
			observation: {
                allowNull: false,
                type: DataTypes.TEXT
            },
			dtValid: {
                allowNull: false,
                type: DataTypes.DATE
            },
			dtEntrad: {
                allowNull: false,
                type: DataTypes.DATE
            },
            metric: {
                allowNull: false,
                type: DataTypes.STRING
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
}, {
    tableName: 'material',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});
