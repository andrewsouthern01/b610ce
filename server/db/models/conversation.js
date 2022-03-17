const { Op } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

// find conversation given two user Ids

Conversation.findConversation = async function (user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      type: "private",
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

// find conversation given list of users id
Conversation.findGroupConversation = async function(senderUser, users) {

  const orderedUsers = [senderUser, ...users].sort((a, b) => (a.id > b.id) ? 1 : -1)

  const conversation = await Conversation.findOne({
    where: {
      type: "group",
      users: orderedUsers
    }
  })

  return conversation
}

Conversation.verifyConversationUsers = async function(conversationId, user1Id, user2Id) {
  const conversation = await Conversation.findOne({
    where: {
      id: conversationId,
      user1Id: {
        [Op.or]: [user1Id, user2Id]
      },
      user2Id: {
        [Op.or]: [user1Id, user2Id]
      }
    }
  })

  return conversation
}

module.exports = Conversation;
