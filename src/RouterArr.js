
import { Routes, Route } from "react-router-dom";
import Item from "./Item";
import ProdDetails from "./ProdDetails";
import Items from "./Items";
import Login from "./Login";
import Cart from "./Cart";
import EditProduct from "./EditProduct";

import PayMent from "./PayMent";
function  RouterArr(){
    
    
    
    
    return(
        <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/item/:name"    element={<ProdDetails/>} />
        <Route path="/" element={<Items/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/editProduct" element={<EditProduct/>} />
        <Route path="/payment" element={<PayMent/>} />
      </Routes>
    )
}

export default RouterArr;