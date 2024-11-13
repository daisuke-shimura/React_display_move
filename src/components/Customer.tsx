import Menu from "./Menu";
import MenuIcon from '@mui/icons-material/Menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Customer = () => {
  return (
    <div>
      <h1>観光客画面</h1>
      <MenuIcon />

      <div>a</div>
      <div style={{position: "absolute",top: "0px",left: "0px",}}>
        <Menu/>
        <MenuIcon style={{width: "30px", height: "30px", padding: "5px 10px"}}/>
      </div>
      <button
    style={{
        position: "absolute",
        bottom: "0px",
        right: "0px",
        backgroundColor: "#3a5bf0",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        padding: "12px",
        zIndex: 1000,
    }}
    onClick={() => {}}
>

    <MenuIcon
        sx={{
            fontSize: 32,
        }}
    />      
</button>
</div>

  );
};

export default Customer;