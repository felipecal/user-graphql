import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../../config/sequelize';
import UserModel from './User';

class TopicModel extends Model {
}


TopicModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        theme: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // topic_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     references: {
        //         model: UserModel,
        //         key: 'id'
        //     }
        // },
        totalCount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
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
        tableName: 'topic',
        sequelize,
        underscored: true,
        paranoid: true,
        deletedAt: 'removed_at'
    },
);

// UserModel.hasMany(PostModel, {
//     foreignKey: 'user_id',
//     sourceKey: 'id',
//     as: 'post'
// });

// // PostModel.belongsTo(UserModel, {
// //     foreignKey: 'post_id',
// //     targetKey: 'id',
// //     as: 'user'
// // });

export default TopicModel;
