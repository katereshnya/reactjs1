import { format } from "date-fns";
import cls from "classnames";
import styles from "./message.module.css";

export const Message = ({ message, children }) => {
  return (
    <div
      className={cls(styles.message, {
        [styles.currentMessage]: message.author === "User",
      })}
    >
      <h3 className={styles.author}>{message.author}</h3>
      <hr className={styles.line} />
      <p className={styles.message}>{message.message}</p>
      {children}
      <p>{format(message.date, "yyyy-MM-dd HH:mm:ss")}</p>
    </div>
  );
};
