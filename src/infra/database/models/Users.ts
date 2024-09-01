// import { sequelize } from './../../config/config';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from './index';

class UserModel extends Model {
}

UserModel.init(
    {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nick_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        removed_at: {
            type: DataTypes.DATE,
        }
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'users',
        sequelize,
        underscored: true,
        paranoid: true,
        deletedAt: 'removed_at'
    }
);



export default UserModel;
