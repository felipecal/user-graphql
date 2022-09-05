import UserModel from '../../../db/models/User'

export default {
    Query: {
        getUserById: async (_parent, { id }, _context, _info) => {

            const user = await UserModel.findByPk(id);
            console.log(user);
            return user;
        },
        getAllUsers: async (_parent, { active }, _context, _info) => {
            if (active === true) {
                return await UserModel.findAll({
                    where:{
                        active: active
                    }
                })
            }
            if ( active === false){
                return await UserModel.findAll({
                    paranoid: false,
                    where:{
                        active: false
                    }
                })
            }
            else{
                throw new Error('Active must be a Boolean!')

            }
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