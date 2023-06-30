import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Material extends Model {
  static init(sequelize, DataTypes) {
  return sequelize.define('Material', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lote: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    formulaQui: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    concentration: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    peso: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estoque: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    observation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dtValid: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dtEntrad: {
      type: DataTypes.DATE,
      allowNull: true
    },
    metric: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'material',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
