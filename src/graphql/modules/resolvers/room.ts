export default {
    Query: {
        getRoomById: async (parent, { id }, { database }, info) => {
            return await database.Rooms.findByPk(id)
        },
        getAllRooms: async (parent, _, { database }, info) => {
            return await database.Rooms.findAll()
        }
    },
    Mutation: {
        createRoom: async (parent, { input }, { database }, info) => {
            return await database.Rooms.create(
                {
                    name: input.name,
                    size: input.size
                }
            )
        },
        updateRoom: async (parent, { id, input }, { database }, info) => {
            const room = await database.Rooms.findByPk(id)
            if (!room) {
                throw new Error('Room not found')
            } else {
                const updateRoom = await room.update(input)
                return updateRoom;
            }
        },
        deleteRoom: async (parent, { id }, { database }, info) => {
            const room = await database.Rooms.findByPk(id);
            if (!room) {
                throw new Error('Room not found')
            } else {
                const deleteRoom = await room.update({
                    removed_at: new Date()
                })
                return !!deleteRoom;
            }
        }
    }
}