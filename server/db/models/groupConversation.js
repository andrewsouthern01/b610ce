const db = require("../db");
const Conversation = require("./conversation");

const GroupConversation = db.define("groupConversation", {});

// find conversation given list of users id
GroupConversation.findGroupConversation = async function(senderUser, groupUsers) {

  const orderedUsers = [senderUser, ...groupUsers].sort((a, b) => (a.id > b.id) ? 1 : -1)

  const conversation = await Conversation.findOne({
    where: {
      groupUsers: orderedUsers
    }
  })

  return conversation
}

module.exports = GroupConversation;