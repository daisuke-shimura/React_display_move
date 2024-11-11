import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import { slide as Menu } from 'react-burger-menu';

import Customer from "./components/Customer";
import Delivery from "./components/Delivery";
import Shop from "./components/Shop";

function App() {
  return (
<BrowserRouter>
      <div className="App">
        <Link to="/">Customer</Link>
        <br />
        <Link to="/Shop">Shop</Link>
        <br />
        <Link to="/Delivery">Delivery</Link>
        <br />
        <Routes>
          <Route path="/" element={<Customer />} />
          <Route path="/Delivery/" element={<Delivery />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;