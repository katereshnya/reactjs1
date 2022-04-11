import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { AccountCircle } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { lastMessageSelector } from "../../../store/messages";
import st from "./chat.module.css";

const useStyles = makeStyles((ctx) => {
  return {
    item: {
      "&.Mui-selected": {
        backgroundColor: "#2b5278",
      },
      "&.Mui-selected:hover": {
        backgroundColor: "#2b5278",
      },
    },
  };
});

export function Chat({ title, selected }) {
  const styles = useStyles();
  const message = useSelector(lastMessageSelector(title));

  return (
    <ListItemButton className={styles.item} selected={selected}>
      <div className={st.wrapper}>
        <ListItem>
          <AccountCircle fontSize="large" className={st.icon} />
        </ListItem>

        <ListItemText primary={title} className={st.text} />

        {message && (
          <ListItemText>
            <ListItemText primary={message.author} className={st.text} />
            <ListItemText primary={message.message} className={st.text} />
          </ListItemText>
        )}
      </div>
    </ListItemButton>
  );
}
