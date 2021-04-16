import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navlinks.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const Navlinks = () => {
  const notify = () => {
    toast.info(
      "This page is in Maintenance !!!",
      { position: toast.POSITION.TOP_CENTER },
      {}
    );
  };

  return (
    <div className="navlinks">
      <div className="navlinks__container">
        <div className="navlinks__left">
          <span className="navlinks__left__menu navlink__link" onClick={notify}>
            <MenuIcon />
          </span>
          <span className="navlinks__left__all navlink__link" onClick={notify}>
            All
          </span>
        </div>
        <div className="navlinks__fill">
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Mobiles
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Computers
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Amazon Pay
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Prime
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            {" "}
            Best Sellers
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Today's Deals
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Buy Again
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            Customer Service
          </span>
          <span className="navlinks__fill__link navlink__link" onClick={notify}>
            {" "}
            New Releases
          </span>
        </div>
        <div className="navlinks__right navlink__image">
          {" "}
          <img
            onClick={notify}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Hello-Charlie/launch/400x39-SWM_with-disclaimer_JPN._CB656396748_.jpg"
            alt=""
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Navlinks;
