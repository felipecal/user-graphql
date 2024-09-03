import UserModel from "../../../../infra/database/models/Users";
import PostModel from "../../../../infra/database/models/Posts";
import { Context } from "apollo-server-core";
import { GraphQLResolveInfo } from "graphql";

export default {
  Query: {
    getUserById: async (_parent, { id }, _context: Context, _info: GraphQLResolveInfo) => {
      const user = await UserModel.findByPk(id, {
        include: [{ model: PostModel, as: "user_posts" }],
      });
      return user;
    },
    getAllUsers: async (_parent, { active }, _context: Context, _info: GraphQLResolveInfo) => {
      const ListUser = await UserModel.findAll({
        where: {
          active: !!active,
        },
        paranoid: false,
        include: [{ model: PostModel, as: "user_posts" }],
      });
      return ListUser;
    },
  },
  Mutation: {
    createUser: async (_parent, { input }, _context: Context, _info: GraphQLResolveInfo) => {
      const user = await UserModel.create({
        full_name: input.full_name,
        nick_name: input.nick_name,
        password: input.password,
        email: input.email,
        active: input.active,
        created_at: new Date(),
      });
      return user;
    },
    updateUser: async (_parent, { id, input }, _context: Context, _info: GraphQLResolveInfo) => {
      const user = await UserModel.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      } else {
        const updateUser = await user.update({
          full_name: input.full_name,
          nick_name: input.nick_name,
          password: input.password,
          email: input.email,
          active: input.active,
        });
        return updateUser;
      }
    },
    deleteUser: async (_parent, { id }, _context: Context, _info: GraphQLResolveInfo) => {
      const user = await UserModel.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      } else {
        await user.destroy(id);
        return true;
      }
    },
  },
};
