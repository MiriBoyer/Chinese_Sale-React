import { useLocation, useParams } from 'react-router-dom';
import Item from './Item';
import './ProdDetails.css';
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from './store/UserSlice/UserActions';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './ItemsDesign.css';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { useNavigate } from 'react-router-dom';
function ProdDetails(){
    const dispatch=useDispatch()
    const user = useSelector((state) => state.user.UserDetailes);
    const productList=useSelector((state)=>state.products.productsList)
const param=useParams();
console.log(param['name']);
const navigate = useNavigate();
var item=productList.find((item)=>item.name==param['name'])
console.log(item)
return(
    <div className="col-12 md:col-4" id="bigDiv">
    <div className="product-grid-item card">
        <div className="product-grid-item-content">  
        <Button icon="pi pi-times" className="p-button-rounded p-button-danger p-button-outlined" id='exit' onClick={(e)=>navigate(`/`)}/><br></br>

          {/* <Button label="Cancel" icon="pi pi-times" className='butDisplay' /> */}

        <img id='pic' src={`${item.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
            <div className="product-name">{item.name}</div>
            <div className="product-description">{item.subHeader}</div>
            <div className="product-description">{item.description}</div>
        </div>
        <div className="product-grid-item-bottom">
            <span className="product-price">${item.price}</span>
            {user!=null
                        && <Button icon="pi pi-shopping-cart" label="Add to Cart" onClick={()=>{

dispatch(addProductToCart({name:item.name,count:1}));

                        }} ></Button>
                    }

                     
        </div>
    </div>
</div>
)

}
export default ProdDetails;