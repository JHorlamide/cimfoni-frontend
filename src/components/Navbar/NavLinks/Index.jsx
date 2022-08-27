import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ styles, link }) => {
  return (
    <Link to={link.path} className={styles}>
      {link.title}
    </Link>
  );
};

export default NavLinks;
