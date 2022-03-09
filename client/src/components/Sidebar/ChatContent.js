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
  newMessages: {
    fontSize: 14,
    color: "#FFFFFF",
    backgroundColor: "#3F92FF",
    borderRadius: "1rem",
    textAlign: "center",
    padding: "0 0.5em",
    margin: "auto 0",
    fontWeight: 600
  }
}));

const ChatContent = ({ conversation }) => {
  const { otherUser, messages} = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const newMessages = useMemo(() =>
    messages.filter((message) => message.readStatus === false && otherUser.id === message.senderId).length, [messages, otherUser.id]
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
      <Typography className={classes.newMessages} >
        {newMessages > 0 ? newMessages : null}
      </Typography>
    </Box>
  );
};

export default ChatContent;
