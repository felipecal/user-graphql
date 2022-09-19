import PostModel from '../../../db/models/Post';
import UserModel from '../../../db/models/User';

export default {
    Query: {
        getPostById: async (_parent, { id }, _context, _info) => {
            const post = await PostModel.findByPk(id);
            return post;
        },
        getAllPosts: async (_parent, { active }, _context, _info) => {
            const ListPost = await PostModel.findAll({
                where: {
                    active: active
                },
                paranoid: false,
                // include: [{ model: UserModel, as: 'user'}]
            })

            return ListPost;
        },
    },
    Mutation: {
        createPost: async (_parent, { input }, _context, _info) => {
            const post = await PostModel.create(
                {
                    title: input.title,
                    description: input.description,
                    active: input.active,
                    created_at: new Date()
                }
            )
            return post;

        },
        updatePost: async (_parent, { id, input }, _context, _info) => {
            const post = await PostModel.findByPk(id)
            if (!post) {
                throw new Error('Post not found')
            } else {
                const updatepost = post.set(input)
                await updatepost.save();
                return updatepost;
            }
        },
        deletePost: async (_parent, { id }, _context, _info) => {
            const post = await PostModel.findByPk(id);
            if (!post) {
                throw new Error('Post not found')
            } else {
                await post.update({
                    where: {
                        id: id
                    },
                    active: false
                })
                await post.destroy(id);
                return true;
            }
        }
    }
}