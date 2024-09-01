import { DataTypes, Model } from 'sequelize';
import { sequelize } from './index';
import UserModel from './Users';
import PostModel from './Posts';

class LikesModel extends Model {
}


LikesModel.init(
    {
        id: {
            type: DataTypes.STRING,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: PostModel,
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
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
        tableName: 'likes',
        sequelize,
        underscored: true,
        paranoid: true,
        deletedAt: 'removed_at'
    },
);

PostModel.hasMany(LikesModel, {
    foreignKey: 'post_id',
    sourceKey: 'id',
    as: 'post_likes'
});

LikesModel.belongsTo(PostModel, {
    foreignKey: 'post_id',
    as: 'post'
})

LikesModel.belongsTo(UserModel, {
    foreignKey: 'user_id',
    as: 'user'
});

export default LikesModel;
