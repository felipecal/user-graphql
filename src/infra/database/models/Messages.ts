import { DataTypes, Model } from "sequelize";
import { sequelize } from "./index";
import UserModel from "./Users";
import PostModel from "./Posts";

class MessageModel extends Model {}

MessageModel.init(
  {
    id: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    post_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: PostModel,
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
    },
    content: {
      type: DataTypes.STRING,
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
    tableName: "messages",
    sequelize,
    underscored: true,
    paranoid: true,
    deletedAt: "removed_at",
  },
);

PostModel.hasMany(MessageModel, {
  foreignKey: "post_id",
  sourceKey: "id",
  as: "post_messages",
});

MessageModel.belongsTo(PostModel, {
  foreignKey: "post_id",
  as: "post",
});

MessageModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});

export default MessageModel;
