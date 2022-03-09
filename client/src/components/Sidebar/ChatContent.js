import React, {useMemo} from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    fontWeight: (newMessages) => newMessages > 0 ? 600 : 400,
    color: (newMessages) => newMessages > 0 ? "#000000" : "#9CADC8",
    letterSpacing: -0.17,
  },
}));

const ChatContent = ({ conversation }) => {
  const { otherUser, messages} = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const newMessages = useMemo(() => 
    messages.filter((message) => message.readStatus === false).length, [messages]
  )

  const classes = useStyles(newMessages);


  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
      {newMessages}
    </Box>
  );
};

export default ChatContent;
