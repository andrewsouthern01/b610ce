import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const {conversationId, messages, otherUser, userId, updateMessage, lastMessageRead } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble 
          key={message.id} 
          text={message.text} 
          time={time} 
          otherUser={otherUser} 
          messageId={message.id} 
          lastMessageRead={lastMessageRead} />
        ) : (
          <OtherUserBubble
            key={message.id}
            conversationId={conversationId}
            messageId={message.id}
            text={message.text}
            readStatus={message.readStatus}
            time={time}
            otherUser={otherUser}
            updateMessage={updateMessage}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
