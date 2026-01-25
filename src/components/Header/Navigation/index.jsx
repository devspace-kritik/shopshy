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
                width: "70%",
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
                        backgroundColor: "rgba(0, 0, 0, 0.05)",
                        color: "var(--color-primary)",
                      },
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                              color: "var(--color-primary)",
                            },
                            "& .MuiTouchRipple-child": {
                              backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                            },
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
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                                      color: "var(--color-primary)",
                                    },
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor:
                                        "rgba(0, 0, 0, 0.5) !important",
                                    },
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
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                                      color: "var(--color-primary)",
                                    },
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor:
                                        "rgba(0, 0, 0, 0.5) !important",
                                    },
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
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                                      color: "var(--color-primary)",
                                    },
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor:
                                        "rgba(0, 0, 0, 0.5) !important",
                                    },
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
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                                      color: "var(--color-primary)",
                                    },
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor:
                                        "rgba(0, 0, 0, 0.5) !important",
                                    },
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
                                    "&:hover": {
                                      backgroundColor: "rgba(0, 0, 0, 0.05)",
                                      color: "var(--color-primary)",
                                    },
                                    "& .MuiTouchRipple-child": {
                                      backgroundColor:
                                        "rgba(0, 0, 0, 0.5) !important",
                                    },
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
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                              color: "var(--color-primary)",
                            },
                            "& .MuiTouchRipple-child": {
                              backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                            },
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
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                              color: "var(--color-primary)",
                            },
                            "& .MuiTouchRipple-child": {
                              backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                            },
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
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                              color: "var(--color-primary)",
                            },
                            "& .MuiTouchRipple-child": {
                              backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                            },
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
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.05)",
                              color: "var(--color-primary)",
                            },
                            "& .MuiTouchRipple-child": {
                              backgroundColor: "rgba(0, 0, 0, 0.5) !important",
                            },
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
                      "& .MuiTouchRipple-child": {
                        backgroundColor: "rgba(0, 0, 0, 0.5) !important",
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
