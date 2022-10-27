import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { Link as linkRouter } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { IconContext } from "react-icons";
import { IoIosSunny } from "react-icons/io";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types'

const AppFrame = ({children}) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton aria-label="menu" style={{ color: "orange" }}>
            <Link component={linkRouter} to="/main" color="inherit">
              <IconContext.Provider value={{ size: "60px" }}>
                <IoIosSunny />
              </IconContext.Provider>
            </Link>
          </IconButton>

          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>

      {children}
      
    </div>
  );
};

AppFrame.propTypes = {
    children: PropTypes.node
}

export default AppFrame;
