import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPannel from "./CategoryPannel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel((prev) => !prev);
  };
  return (
    <>
      <nav className="navContainer">
        <div className="navChildContainer">
          <div className="navCol1">
            <Button
              className="categoriesButton"
              onClick={openCategoryPanel}
              sx={{
                color: "black",
                gap: "8px",
                width: "90%",
                fontWeight: "500",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.05)",
                },
              }}
            >
              <RiMenu2Fill className="menuIcon" />
              Shop By Categories
              <LiaAngleDownSolid className="downArrowIcon" />
            </Button>
          </div>
          <div className="navCol2">
            <ul className="col2navList">
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Fashion
                  </Button>
                </Link>

                <div className="submenuDropdown">
                  <ul>
                    <li className="dropdownListItem">
                      <Link to={"/"} className="dropdownItemLink">
                        <Button
                          sx={{
                            color: "black",
                            textTransform: "none",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "start",
                            borderRadius: "0",
                          }}
                        >
                          Men
                        </Button>

                        <div className="submenuInnerDropdown">
                          <ul>
                            <li className="dropdownInnerListItem">
                              <Link to={"/"} className="dropdownItemLink">
                                <Button
                                  sx={{
                                    color: "black",
                                    textTransform: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "start",
                                    borderRadius: "0",
                                  }}
                                >
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="dropdownInnerListItem">
                              <Link to={"/"} className="dropdownItemLink">
                                <Button
                                  sx={{
                                    color: "black",
                                    textTransform: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "start",
                                    borderRadius: "0",
                                  }}
                                >
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="dropdownInnerListItem">
                              <Link to={"/"} className="dropdownItemLink">
                                <Button
                                  sx={{
                                    color: "black",
                                    textTransform: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "start",
                                    borderRadius: "0",
                                  }}
                                >
                                  Pents
                                </Button>
                              </Link>
                            </li>
                            <li className="dropdownInnerListItem">
                              <Link to={"/"} className="dropdownItemLink">
                                <Button
                                  sx={{
                                    color: "black",
                                    textTransform: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "start",
                                    borderRadius: "0",
                                  }}
                                >
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="dropdownInnerListItem">
                              <Link to={"/"} className="dropdownItemLink">
                                <Button
                                  sx={{
                                    color: "black",
                                    textTransform: "none",
                                    width: "100%",
                                    textAlign: "left",
                                    justifyContent: "start",
                                    borderRadius: "0",
                                  }}
                                >
                                  Watch
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={"/"} className="dropdownItemLink">
                        <Button
                          sx={{
                            color: "black",
                            textTransform: "none",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "start",
                            borderRadius: "0",
                          }}
                        >
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={"/"} className="dropdownItemLink">
                        <Button
                          sx={{
                            color: "black",
                            textTransform: "none",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "start",
                            borderRadius: "0",
                          }}
                        >
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={"/"} className="dropdownItemLink">
                        <Button
                          sx={{
                            color: "black",
                            textTransform: "none",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "start",
                            borderRadius: "0",
                          }}
                        >
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="dropdownListItem">
                      <Link to={"/"} className="dropdownItemLink">
                        <Button
                          sx={{
                            color: "black",
                            textTransform: "none",
                            width: "100%",
                            textAlign: "left",
                            justifyContent: "start",
                            borderRadius: "0",
                          }}
                        >
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Welness
                  </Button>
                </Link>
              </li>
              <li className="nav2ListItem">
                <Link to={"/"} className="navLink">
                  <Button
                    sx={{
                      color: "black",
                      fontWeight: "500",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "rgba(0,0,0,0.05)",
                        color: "var(--color-primary)",
                      },
                    }}
                  >
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navCol3">
            <p className="col3Text">
              <GoRocket className="rocketIcon" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category pannel component*/}
      <CategoryPannel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
