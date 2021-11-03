import {
  TextField,
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
} from "@material-ui/core";
import React from "react";
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
          <Typography variant="h6" component="div" style={{ flexGrow: "1" }}>
            DICTIONARY
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
