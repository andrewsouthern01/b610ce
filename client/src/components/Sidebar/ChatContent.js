import React from "react";
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
  const { otherUser, numberNewMessages } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;


  const classes = useStyles(numberNewMessages);

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText && latestMessageText.length > 30 ? `${latestMessageText.slice(0, 30)}...` : latestMessageText}
        </Typography>
      </Box>
      <Typography className={classes.newMessages} >
        {numberNewMessages > 0 ? (numberNewMessages < 99 ? numberNewMessages : "99+" ) : null}
      </Typography>
    </Box>
  );
};

export default ChatContent;
