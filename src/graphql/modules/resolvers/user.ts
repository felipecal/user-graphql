export default {
    Query: {
        getRoomById: async (parent, { id }, { database }, info) => {
            return await database.Users.findByPk(id)
        },
        getAllRooms: async (parent, _, { database }, info) => {
            return await database.Users.findAll()
        }
    },
    Mutation: {
        createRoom: async (parent, { input }, { database }, info) => {
            return await database.Users.create(
                {
                    name: input.name,
                    size: input.size
                }
            )
        },
        updateRoom: async (parent, { id, input }, { database }, info) => {
            const user = await database.Users.findByPk(id)
            if (!user) {
                throw new Error('User not found')
            } else {
                const updateUser = await user.update(input)
                return updateUser;
            }
        },
        deleteUser: async (parent, { id }, { database }, info) => {
            const user = await database.Users.findByPk(id);
            if (!user) {
                throw new Error('User not found')
            } else {
                const deleteUser = await user.update({
                    removed_at: new Date()
                })
                return !!deleteUser;
            }
        }
    }
}