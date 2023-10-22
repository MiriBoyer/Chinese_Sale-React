import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './ItemsDesign.css';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from './store/UserSlice/UserActions';
import { useSelector, useDispatch } from "react-redux";




const Item = (props) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.user.Cart);
   const user = useSelector((state) => state.user.UserDetailes);

   return(
       <div className="col-12 md:col-4" >
                <div className="product-grid-item card">
                    {/* <div className="product-grid-item-top">
                        <div>
                            <i className="pi pi-tag product-category-icon"></i>
                            <span className="product-category">{props.category}</span>
                        </div>
                        <span className={`product-badge status-${props.inventoryStatus.toLowerCase()}`}>{props.inventoryStatus}</span>
                    </div> */}
                    <div className="product-grid-item-content">
                    <img   onClick={()=>                    
                        navigate(`/item/${props.name}`) }
                   src={`${props.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={props.name} />
                        <div className="product-name">{props.name}</div>
                        <div className="product-description">{props.subHeader}</div>
                        {/* <Rating value={props.rating} readOnly cancel={false}></Rating> */}
                    </div>

                    
                    <div className="product-grid-item-bottom">
                        <span className="product-price">${props.price}</span>
                       {user
                        && <Button icon="pi pi-shopping-cart" label="Add to Cart" onClick={()=>{

dispatch(addProductToCart({name:props.name,count:1,price:props.price,img:props.img,subHeader:props.subHeader}));

                        }} ></Button>
                    }</div>



                </div>
            </div>
  
    )
}

export default Item;