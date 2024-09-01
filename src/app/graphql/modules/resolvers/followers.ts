import FollowersModel from "../../../../infra/database/models/Followers";
import UserModel from "../../../../infra/database/models/Users";

export default {
  Query: {
    getFollowerById: async (_parent, { id }, _context, _info) => {
      const follow = await FollowersModel.findByPk(id, {
        include: [
          { model: UserModel, as: "follower" },
          { model: UserModel, as: "followed" },
        ],
      });
      return follow;
    },
    getAllFollowers: async (_parent, _args, _context, _info) => {
      const followers = await FollowersModel.findAll({
        include: [
          { model: UserModel, as: "follower" },
          { model: UserModel, as: "followed" },
        ],
      });

      return followers;
    },
  },
  Mutation: {
    followUser: async (_parent, { input }, _context, _info) => {
      const likes = await FollowersModel.create({
        user_follow: input.user_follow,
        user_followed: input.user_followed,
        created_at: new Date(),
      });
      return likes;
    },
    unfollowUser: async (_parent, { id }, _context, _info) => {
      const follower = await FollowersModel.findByPk(id);
      if (!follower) {
        throw new Error("Likes not found");
      } else {
        await follower.destroy(id);
        return true;
      }
    },
  },
};
