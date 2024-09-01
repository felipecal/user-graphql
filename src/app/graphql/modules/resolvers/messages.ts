import PostModel from '../../../../infra/database/models/Posts';
import MessageModel from '../../../../infra/database/models/Messages';
import UserModel from '../../../../infra/database/models/Users';

export default {
    Query: {
        getMessageById: async (_parent, { id }, _context, _info) => {
            const message = await MessageModel.findByPk(id, {
                include: [{ model: PostModel, as: 'post' }, { model: UserModel, as: 'user' }]
            });
            return message;
        },
        getAllMessages: async (_parent, _args, _context, _info) => {
            const messages = await MessageModel.findAll({
                include: [{ model: PostModel, as: 'post' }, { model: UserModel, as: 'user' }]
            })

            return messages;
        },
    },
    Mutation: {
        createMessage: async (_parent, { input }, _context, _info) => {
            const message = await MessageModel.create(
                {
                    post_id: input.post_id,
                    user_id: input.user_id,
                    content: input.content,
                    created_at: new Date()
                }
            )
            return message;

        },
        updateMessage: async (_parent, { id, input }, _context, _info) => {
            const message = await MessageModel.findByPk(id)
            if (!message) {
                throw new Error('Message not found')
            } else {
                const updatedMessage = await message.update(input)
                return updatedMessage
            }
        },
        deleteMessage: async (_parent, { id }, _context, _info) => {
            const message = await MessageModel.findByPk(id);
            if (!message) {
                throw new Error('Message not found');
            } else {
                await message.destroy();
                return true;
            }
        }
        }
    }
