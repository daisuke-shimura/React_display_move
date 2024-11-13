import Menu from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';

const Shop = () => {
  return (
    <div>
      <div style={{position: "absolute",top: "0px",left: "0px",}}>
        <Menu/>
        <MenuIcon style={{width: "30px", height: "30px", padding: "5px 10px"}}/>
      </div>
      <h1>自治体・お店の画面</h1>
    </div>
  );
};

export default Shop;