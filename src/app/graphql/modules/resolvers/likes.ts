import PostModel from '../../../../infra/database/models/Posts';
import LikesModel from '../../../../infra/database/models/Likes';
import UserModel from '../../../../infra/database/models/Users';

export default {
    Query: {
        getLikeById: async (_parent, { id }, _context, _info) => {
            const likes = await LikesModel.findByPk(id, {
                include: [{ model: PostModel, as: 'post' }, { model: UserModel, as: 'user'}]
            });
            return likes;
        },
        getAllLikes: async (_parent, _args, _context, _info) => {
            const likes = await LikesModel.findAll({
                include: [{ model: PostModel, as: 'post' }, { model: UserModel, as: 'user'}]
            })

            return likes;
        },
    },
    Mutation: {
        createLike: async (_parent, { input }, _context, _info) => {
            const likes = await LikesModel.create(
                {
                    post_id: input.post_id,
                    user_id: input.user_id,
                    created_at: new Date()
                }
            )
            return likes;

        },
        deleteLike: async (_parent, { id }, _context, _info) => {
            const likes = await LikesModel.findByPk(id);
            if (!likes) {
                throw new Error('Likes not found')
            } else {
                await likes.destroy(id);
                return true;
            }
        }
    }
}