import { DataTypes, Model } from 'sequelize';
import { DeletedAt } from 'sequelize-typescript';
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
        tableName: 'user',
        sequelize,
        underscored: true,
        paranoid: true,
        deletedAt: 'removed_at'
    }
);

export default UserModel;
