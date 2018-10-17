import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import About from "../about";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const App = () => (
  <div>
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Material-UI
          </Typography>
          <div />
        </Toolbar>
      </AppBar>
    </header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
);

export default App;
