import {DataTypes} from "sequelize";
import {sequelize} from "./index.cjs";

export const Material = sequelize.define('material', {
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    metric: {
        allowNull: false,
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'material',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});
