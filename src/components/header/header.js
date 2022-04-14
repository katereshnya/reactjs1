import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from "@mui/material";
import styles from "./header.module.css";
import logo from "../../assets/react.png";
import { ThemeContext } from "../../theme-context";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];

export function Header() {
  const { themeSetter, theme } = useContext(ThemeContext);

  return (
    <AppBar position="static" color="primary" className={styles.appBar}>
      <Container maxWidth="xl" className={styles.header}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            <img src={logo} alt="Logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            {menu.map((item) => (
              <Button
                key={item.to}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={item.to} className={styles.link}>
                  {item.title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <button onClick={() => themeSetter("light")}>light</button>
            <button onClick={() => themeSetter("dark")}>dark</button>
            <span style={{ color: theme.theme.color }}>{theme.name}</span>
            <IconButton sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
