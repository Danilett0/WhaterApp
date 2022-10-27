import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {

  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);
  console.log("My Current Div ", myRefDiv.current);

  useEffect(() => {
    console.log("MyRefDiv.current (useEffect)", myRefDiv.current);

    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
      console.log("establesco vanta a un valor mayor a 0");
    }

    return () => {
      if (vanta) {
        vanta.destroy();
        console.log("Libero los recursos de vanta");
      }
    };
  }, [vanta]);

  return <div className="fullsize" ref={myRefDiv}>
    {children}
  </div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
