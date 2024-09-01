import MessageModel from "../../../../infra/database/models/Messages";
import PostModel from "../../../../infra/database/models/Posts";
import UserModel from "../../../../infra/database/models/Users";
import LikesModel from "../../../../infra/database/models/Likes";

export default {
  Query: {
    getPostById: async (_parent, { id }, _context, _info) => {
      const post = await PostModel.findByPk(id, {
        include: [
          { model: UserModel, as: "user" },
          { model: MessageModel, as: "post_messages" },
          { model: LikesModel, as: "post_likes" },
        ],
      });
      return post;
    },
    getAllPosts: async (_parent, _args, _context, _info) => {
      const posts = await PostModel.findAll({
        include: [
          { model: UserModel, as: "user" },
          { model: MessageModel, as: "post_messages" },
          { model: LikesModel, as: "post_likes" },
        ],
      });

      return posts;
    },
  },
  Mutation: {
    createPost: async (_parent, { input }, _context, _info) => {
      const post = await PostModel.create({
        user_id: input.user_id,
        title: input.title,
        content: input.content,
        created_at: new Date(),
      });
      return post;
    },
    updatePost: async (_parent, { id, input }, _context, _info) => {
      const post = await PostModel.findByPk(id);
      if (!post) {
        throw new Error("Post not found");
      } else {
        const updatedPost = await post.update(input);
        return updatedPost;
      }
    },
    deletePost: async (_parent, { id }, _context, _info) => {
      const post = await PostModel.findByPk(id);
      if (!post) {
        throw new Error("Post not found");
      } else {
        await post.destroy(id);
        return true;
      }
    },
  },
};
