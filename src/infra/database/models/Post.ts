import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import  UserModel  from './User';

class PostModel extends Model {
}


PostModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: true
        },
        removed_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        timestamps: true,
        freezeTableName: true,
        tableName: 'post',
        sequelize,
        underscored: true,
        paranoid: true,
        deletedAt: 'removed_at'
    },
);

UserModel.hasMany(PostModel, {
    foreignKey: 'user_id',
    sourceKey: 'id',
    as: 'post'
});

// PostModel.belongsTo(UserModel, {
//     foreignKey: 'post_id',
//     targetKey: 'id',
//     as: 'user'
// });

export default PostModel;
