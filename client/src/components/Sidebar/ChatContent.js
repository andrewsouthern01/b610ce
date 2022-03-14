import React from "react";
import { Box, Typography, Badge } from "@material-ui/core";
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
      <Badge badgeContent={numberNewMessages} color="primary" max={99} anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }} />
    </Box>
  );
};

export default ChatContent;
