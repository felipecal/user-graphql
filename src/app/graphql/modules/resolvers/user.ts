import UserModel from '../../../../infra/database/models/Users';
import PostModel from '../../../../infra/database/models/Posts';

export default {
    Query: {
        getUserById: async (_parent, { id }, _context, _info) => {
            const user = await UserModel.findByPk(id, {
                include: [{ model: PostModel, as: 'user_posts' }]
            });
            return user;
        },
        getAllUsers: async (_parent, { active }, _context, _info) => {
            const ListUser = await UserModel.findAll({
                where: {
                    active: !!active
                },
                paranoid: false,
                include: [{ model: PostModel, as: 'user_posts' }]
            })
            return ListUser;
        },
    },
    Mutation: {
        createUser: async (_parent, { input }, _context, _info) => {
            const user = await UserModel.create(
                {
                    full_name: input.full_name,
                    nick_name: input.nick_name,
                    password: input.password,
                    email: input.email,
                    active: input.active,
                    created_at: new Date()
                }
            )
            return user;

        },
        updateUser: async (_parent, { id, input }, _context, _info) => {
            console.log("id que recebi", id);
            console.log("input que recebi", input);
            
            const user = await UserModel.findByPk(id)
            if (!user) {
                throw new Error('User not found')
            } else {
                const updateUser = await user.update(
                    {
                        full_name: input.full_name,
                        nick_name: input.nick_name,
                        password: input.password,
                        email: input.email,
                        active: input.active,
                    }
                )
                return updateUser;
            }
        },
        deleteUser: async (_parent, { id }, _context, _info) => {
            const user = await UserModel.findByPk(id);
            if (!user) {
                throw new Error('User not found')
            } else {
                await user.destroy(id);
                return true;
            }
        }
    }
}