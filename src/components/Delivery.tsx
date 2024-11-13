import Menu from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Delivery = () => {
  return (
    <div>
      <div style={{position: "absolute",top: "0px",left: "0px",}}>
        <Menu/>
        <MenuIcon style={{width: "30px", height: "30px", padding: "5px 10px"}}/>
      </div>
      <h1>回収業者画面</h1>
      <style>
        {`
          .menu-item {
            color: black;
            text-decoration: none;
          }
          .menu-item:hover {
            color: blue;
            text-decoration: underline;
          }
        `}
      </style>
      <Link to="/" className="menu-item">Customer</Link>
    </div>
  );
};

export default Delivery;