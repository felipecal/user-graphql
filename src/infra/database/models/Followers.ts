import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import UserModel from "./Users";
import PostModel from "./Posts";

class FollowersModel extends Model {}

FollowersModel.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_follow: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    user_followed: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: true,
    },
    removed_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
    tableName: "followers",
    sequelize,
    underscored: true,
    paranoid: true,
    deletedAt: "removed_at",
  },
);

UserModel.hasMany(FollowersModel, {
  foreignKey: "user_follow",
  sourceKey: "id",
  as: "following",
});

UserModel.hasMany(FollowersModel, {
  foreignKey: "user_followed",
  sourceKey: "id",
  as: "followers",
});

FollowersModel.belongsTo(UserModel, {
  foreignKey: "user_follow",
  as: "follower",
});

FollowersModel.belongsTo(UserModel, {
  foreignKey: "user_followed",
  as: "followed",
});

export default FollowersModel;
