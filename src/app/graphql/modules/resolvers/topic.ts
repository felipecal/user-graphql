import TopicModel from '../../../../infra/database/models/Topic';
import UserModel from '../../../../infra/database/models/User';

export default {
    Query: {
        getTopicById: async (_parent, { id }, _context, _info) => {
            const post = await TopicModel.findByPk(id);
            return post;
        },
        getAllTopics: async (_parent, { active }, _context, _info) => {
            const ListTopic = await TopicModel.findAll({
                where: {
                    active: !!active
                },
                paranoid: false,
                // include: [{ model: UserModel, as: 'user'}]
            })

            return ListTopic;
        },
    },
    Mutation: {
        createTopic: async (_parent, { input }, _context, _info) => {
            const topic = await TopicModel.create(
                {
                    name: input.name,
                    theme: input.theme,
                    description: input.description,
                    totalCount: input.totalCount,
                    created_at: new Date()
                }
            )
            return topic;

        },
        updateTopic: async (_parent, { id, input }, _context, _info) => {
            const topic = await TopicModel.findByPk(id)
            if (!topic) {
                throw new Error('topic not found')
            } else {
                const updatetopic = topic.set(input)
                await updatetopic.save();
                return updatetopic;
            }
        },
        deleteTopic: async (_parent, { id }, _context, _info) => {
            const topic = await TopicModel.findByPk(id);
            if (!topic) {
                throw new Error('topic not found')
            } else {
                await topic.update({
                    where: {
                        id: id
                    },
                    active: false
                })
                await topic.destroy(id);
                return true;
            }
        }
    }
}