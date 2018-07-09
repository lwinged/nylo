import React, { Fragment } from "react";
import {
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Drawer,
  List,
  Typography
} from "@material-ui/core";

const Sidebar = () => {
  const drawer = (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Stats" />
        </ListItem>
      </List>
    </Drawer>
  );

  const appbar = (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  );

  return (
    <Fragment>
      {appbar}
      {drawer}
      <main>Mon contenu</main>
    </Fragment>
  );
};

export default Sidebar;
