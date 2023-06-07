import React, { useMemo } from "react";
import WelcomeScreen from "../Components/WelcomeScreen/WelcomeScreen";
import { IconContext } from "react-icons";
import { IoIosSunny } from "react-icons/io";
import Typography from "@material-ui/core/Typography";
import { Link as linkRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

const WelcomePage = (props) => {
  const iconValue = useMemo(() => ({ size: "150px", color: "orange" }), []);
  return (
    <div>
      <WelcomeScreen>
        <div className="highlight">
          <IconContext.Provider value={iconValue}>
            <IoIosSunny />
          </IconContext.Provider>

          <Typography variant="h4">Weather App</Typography>

          <Link component={linkRouter} to="/main" color="inherit">
            <button className="btnIngreso">Ingresar</button>
          </Link>
        </div>
      </WelcomeScreen>
    </div>
  );
};

export default WelcomePage;
