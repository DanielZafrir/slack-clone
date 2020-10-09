import React from "react";

import "./Header.css";

import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateValue } from "../../ContextApi/StateProvider";

const Header = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Daniel zafrir" />
      </div>
      <div className="header__right">
        <Link className="header__right__home__link" to="/">
          <HelpOutlineIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
