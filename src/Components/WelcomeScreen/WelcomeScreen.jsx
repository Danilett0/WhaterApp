import PropTypes from "prop-types";
import useVanta from './../../Hooks/useVanta'

const WelcomeScreen = ({ children }) => {

const {myRefDiv} = useVanta()

  return <div className="fullsize" ref={myRefDiv}>
    {children}
  </div>;
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
