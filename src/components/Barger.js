import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default props => {
  return (
    <Menu>
      <div>
        <style>
          {`
            .menu-item {
                color: #000;
                text-decoration: none;
                padding: 0 10px;
                background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(256, 256, 256) 50%);
                background-position: 0 0;
                background-size: 200% auto;
                transition: .3s;
            }
            .menu-item:hover {
                background-position: -100% 0;
                color: #696969;
            }
          `}
        </style>
      </div>
      <br></br>
      <Link to="/" className="menu-item" ><GroupsIcon /> Customer</Link>
      <br></br>
      <Link to="/Shop" className="menu-item" ><StoreIcon /> Shop</Link>
      <br></br>
      <Link to="/Delivery" className="menu-item" ><LocationOnIcon /> Delivery</Link>
    </Menu>
  );
};