import { format } from "date-fns";
import { Button } from "@mui/material";
import cls from "classnames";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store/messages";
import styles from "./message.module.css";

export const Message = ({ message, children, roomId }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <div>
        <h3 className={styles.author}>{message.author}</h3>
        <hr className={styles.line} />
        <p className={styles.message}>{message.message}</p>
        {children}
        <p>{format(message.date, "yyyy-MM-dd HH:mm:ss")}</p>
      </div>

      <Button
        color="info"
        onClick={() => dispatch(deleteMessage(roomId, message?.id))}
      >
        x
      </Button>
    </div>
  );
};
