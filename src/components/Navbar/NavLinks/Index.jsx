import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ className, link }) => {
  return (
    <Link to={link.path} className={className}>
      {link.title}
    </Link>
  );
};

export default NavLinks;
