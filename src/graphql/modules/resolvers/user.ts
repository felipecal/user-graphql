import UserModel from '../../../db/models/User'
import PostModel from '../../../db/models/Post';

export default {
    Query: {
        getUserById: async (_parent, { id }, _context, _info) => {
            const user = await UserModel.findByPk(id);
            return user;
        },
        getAllUsers: async (_parent, { active }, _context, _info) => {
            const ListUser = await UserModel.findAll({
                where:{
                    active: !!active
                },
                paranoid: false,
                include: [{ model: PostModel, as: 'post' }]
            })
            console.log(ListUser);
            return ListUser;
        },
    },
    Mutation: {
        createUser: async (_parent, { input }, _context, _info) => {
            const user = await UserModel.create(
                {
                    first_name: input.first_name,
                    last_name: input.last_name,
                    age: input.age,
                    email: input.email,
                    active: input.active,
                    created_at: new Date()
                }
            )
            return user;

        },
        updateUser: async (_parent, { id, input }, _context, _info) => {
            const user = await UserModel.findByPk(id)
            if (!user) {
                throw new Error('User not found')
            } else {
                const updateUser = user.set(input)
                await updateUser.save();
                return updateUser;
            }
        },
        deleteUser: async (_parent, { id }, _context, _info) => {
            const user = await UserModel.findByPk(id);
            if (!user) {
                throw new Error('User not found')
            } else {
                await user.update({
                    where: {
                        id: id
                    },
                    active: false
                })
                await user.destroy(id);
                return true;
            }
        }
    }
}