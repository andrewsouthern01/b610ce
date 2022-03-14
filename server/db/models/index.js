const Conversation = require("./conversation");
const GroupConversation = require("./groupConversation")
const User = require("./user");
const Message = require("./message");

// associations

User.hasMany(Conversation);
User.hasMany(GroupConversation)
Conversation.belongsTo(User, { as: "user1" });
Conversation.belongsTo(User, { as: "user2" });
GroupConversation.belongsTo(User, {as: "owner"})
GroupConversation.belongsToMany(User, {through: "groupUsers"})
Message.belongsTo(Conversation);
Message.belongsTo(GroupConversation);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  GroupConversation,
  Message
};
