import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FiMinusSquare } from "react-icons/fi";

const PrimaryButton = styled(Button)(() => ({
  textAlign: "left",
  width: "100%",
  cursor: "pointer",
  justifyContent: "flex-start",
  textTransform: "none",
  color: "black",
  padding: "0.25rem 1rem",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  "&:active": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  "&.selected": {
    backgroundColor: "rgba(0,0,0,0.05)",
    fontWeight: 500,
  },
}));

const CategoryPannel = (props) => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="drawerHeading">
        Shop By Categories{" "}
        <IoCloseSharp
          className="drawerCloseIcon"
          onClick={props.openCategoryPanel}
        />
      </h3>

      <div className="scroll">
        <ul className="drawerList">
          <li className="drawerListItem">
            <Link to={"/"} className="drawerList">
              <PrimaryButton onClick={() => openSubmenu(0)}>
                Fashion
              </PrimaryButton>
            </Link>
            {submenuIndex === 0 ? (
              <FiMinusSquare
                className="drawerPlusIcon"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="drawerPlusIcon"
                onClick={() => openSubmenu(0)}
              />
            )}

            <FiMinusSquare
              className="drawerPlusIcon"
              onClick={() => openSubmenu(0)}
            />

            {submenuIndex === 0 && (
              <ul className="submenuList">
                <li className="submenuListItem">
                  <Link to={"/"} className="drawerList">
                    <PrimaryButton onClick={() => openInnerSubmenu(0)}>
                      Apparel
                    </PrimaryButton>
                  </Link>
                  {innerSubmenuIndex === 0 ? (
                    <FiMinusSquare
                      className="drawerPlusIcon"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="drawerPlusIcon"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubmenuIndex === 0 && (
                    <ul className="innerSubmenuList">
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Leather Watch
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          <li className="drawerListItem">
            <Link to={"/"} className="drawerList">
              <PrimaryButton onClick={() => openSubmenu(1)}>
                Fashion
              </PrimaryButton>
            </Link>
            {submenuIndex === 1 ? (
              <FiMinusSquare
                className="drawerPlusIcon"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="drawerPlusIcon"
                onClick={() => openSubmenu(1)}
              />
            )}

            <FiMinusSquare
              className="drawerPlusIcon"
              onClick={() => openSubmenu(1)}
            />

            {submenuIndex === 1 && (
              <ul className="submenuList">
                <li className="submenuListItem">
                  <Link to={"/"} className="drawerList">
                    <PrimaryButton onClick={() => openInnerSubmenu(1)}>
                      Apparel
                    </PrimaryButton>
                  </Link>
                  {innerSubmenuIndex === 1 ? (
                    <FiMinusSquare
                      className="drawerPlusIcon"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="drawerPlusIcon"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubmenuIndex === 1 && (
                    <ul className="innerSubmenuList">
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Leather Watch
                        </Link>
                      </li>
                      <li className="submenuListItem">
                        <Link to={"/"} className="menuLink">
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={props.openCategoryPanel}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPannel;
