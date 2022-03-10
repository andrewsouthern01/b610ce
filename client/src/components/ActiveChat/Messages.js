import React, { useMemo } from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  const lastMessageRead = useMemo(() => 
    {
      let lastIndex = messages.length - 1
      while (lastIndex !== -1) {
        if (messages[lastIndex].readStatus === true) {
        return messages[lastIndex].id
        }
        lastIndex--
      }
    }, [messages])

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === userId ? (
          <SenderBubble key={message.id} text={message.text} time={time} otherUser={otherUser} messageId={message.id} lastMessageRead={lastMessageRead} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
