import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"} className="logo">
        <img src={require('../assets/img/netf1ix.svg').default} alt='' />
      </Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/movie"}>Movies</Link>
      <Link to={"/tv"}>TV Shows</Link>
    </div>
  );
};

export default Header;
