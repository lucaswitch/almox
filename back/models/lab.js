import {DataTypes} from "sequelize";
import {sequelize} from "./index.cjs";

export const Lab = sequelize.define('lab', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
    tableName: 'lab',
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at'
});
