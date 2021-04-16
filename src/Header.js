import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const userLogOut = () => {
    if (user) {
      auth.signOut();
    }
  };
  const notify = () => {
    toast.info("This function is in development !!!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="logo"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <input type="text" name="" id="" className="header__searchbar" />
        <SearchIcon className="header__searchIcon" onClick={notify} />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div className="header__option" onClick={userLogOut}>
            <span className="header__option__lineOne">Hello,</span>
            <span className="header__option__lineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Returns</span>
            <span className="header__option__lineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="" className="header__link">
          <div className="header__option" onClick={notify}>
            <span className="header__option__lineOne">Your</span>
            <span className="header__option__lineTwo">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__option__basket">
            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            <span className="header__option__lineTwo header__basket__count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
