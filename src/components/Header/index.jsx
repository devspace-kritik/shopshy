import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./style.css";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from "./Navigation";


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    // right: -3,
    // top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="header-container">
      <div className="top-strip">
        <div className="container">
          <div className="top-header">
            <div className="col1">
              <p className="col1-heading-text">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2">
              <ul className="top-header-list-container">
                <li className="top-header-list-item">
                  <Link to="/help-center" className="header-list-text">
                    Help-Center
                  </Link>
                </li>
                <li className="top-header-list-item">
                  <Link to={"order-center"} className="header-list-text">
                    order-Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="container main-header-container">
          <div className="main-col1">
            <Link to={"/"}>
              <img src="/logo.svg" alt="image" width={222} height={44} />
            </Link>
          </div>
          <div className="main-col2">
            <Search />
          </div>
          <div className="main-col3">
            <ul className="signupList">
              <li className="signupListItem">
                <Link to={"login"} className="link loginLinkStyle">
                  Login
                </Link>{" "}
                |{" "}
                <Link to={"Register"} className="link loginLinkStyle">
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={4}
                    color="secondary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <IoGitCompareOutline />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={4}
                    color="secondary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <FaRegHeart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                <IconButton aria-label="cart">
                  <StyledBadge
                    badgeContent={4}
                    color="secondary"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MdOutlineShoppingCart />
                  </StyledBadge>
                </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navigation/>
    </header>
  );
};

export default Header;
