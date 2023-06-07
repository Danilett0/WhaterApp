import React from "react";
import { Link } from "react-router-dom";
import ImageNotFound from "../Images/not_found.jpg";

const NotFoundPage = (props) => {
  return (
    <div className="mainNotFound">
      <img className="ImgNotFound" src={ImageNotFound} alt="" />
      <Link to="/">
        <h4>llevame al inicio</h4>
      </Link>
    </div>
  );
};

export default NotFoundPage;
