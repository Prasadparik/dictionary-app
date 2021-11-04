import {
  TextField,
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
import Options from "../Options";
import "./Header.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="body" component="div" style={{ flexGrow: "1" }}>
            DICTIONARY
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Options />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
