import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";

import { ShoppingCartOutlined } from '@material-ui/icons'
import useStyles from './Styles';

const Navbar = ( { totalItems } ) => {
  const classes = useStyles();

  return (
    <>
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit">
          <img  className={classes.image} src="https://i.ytimg.com/vi/-rdzt2l-rDE/maxresdefault.jpg" alt="ReactCommerce" height="25px"/>
          ReactCommerce
        </Typography>
        <div className={classes.grow} />
        <div className={classes.button}>
          <IconButton aria-label="Show cart items" color="inherit">
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </div>
        </Toolbar>
    </AppBar>
    </>
  )
};

export default Navbar;
