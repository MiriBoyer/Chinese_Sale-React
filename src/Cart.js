import { useState } from "react"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
 import './Cart.css';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from './store/UserSlice/UserActions';
import {removeProductFromCart } from './store/UserSlice/UserActions';
function Cart(){
    const navigate=useNavigate();
    const dispatch = useDispatch();
   const products = useSelector((state) => state.products.productsList);
   const cartStore = useSelector((state) => state.user.Cart);
    const [cart,SetCart]=useState(products.filter((item)=>cartStore.find((i)=>i.name==item.name))) 
// const UserDetailes = useSelector((state) => state.user.UserDetailes);

const footer = `In total there are  ${useSelector((state) => state.user.Count)} products. For payment  ${useSelector((state) => state.user.GlobalAccount)}$`;
// ${this.state.products ? this.state.products.length : 0} 
// this.imageBodyTemplate = this.imageBodyTemplate.bind(this);
//         this.priceBodyTemplate = this.priceBodyTemplate.bind(this);
// function priceBodyTemplate(rowData) {
//             return this.formatCurrency();
//         }
// function      imageBodyTemplate(rowData) {
//                     return <img src={`${rowData.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.name} />;
//                 }       
const ShowItem = (data) => {
    const dispatch = useDispatch();

    return(
        <div className="product-item">
                 <img src={`${data.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                 <div className="product-detail">
                     <div className="product-name">{data.name}</div>
                     <div className="product-description1">{data.subHeader}</div>
                     <div className="product-description">{data.description}</div>
                     <span className="product-price">${data.price}</span>
                 </div>
                 <div  className="product-account">
                 {data.count!=0
                        &&  <Button icon="pi pi-minus" label="" onClick={()=>{dispatch(removeProductFromCart(data));} }></Button>}
                 <div  className="product-count">{data.count}</div>
                     <Button icon="pi pi-plus" label="" onClick={()=>{dispatch(addProductToCart(data));} }></Button>
                 </div>
             </div>
    )
}

    return(
       <>
        <div >{ cartStore.map((item)=><div >{ShowItem(item)} </div>)}   </div>
        <div className="footer">{footer}</div>
        <div className='submit'><Button label="For Payment" onClick={()=>{navigate(`/payment`)}}></Button></div> 
    
    </> )  
}
export default Cart


