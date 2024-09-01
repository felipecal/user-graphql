import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import UserModel from "./Users";

class PostModel extends Model {}

PostModel.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    tableName: "posts",
    sequelize,
    underscored: true,
    paranoid: true,
    deletedAt: "removed_at",
  },
);

UserModel.hasMany(PostModel, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "user_posts",
});

PostModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});

export default PostModel;
