import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/config';

class UserModel extends Model {
}

UserModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        removedAt: DataTypes.DATE
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user',
        sequelize,
        underscored: true
    }
);

export default UserModel;
