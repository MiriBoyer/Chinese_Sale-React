import { useState } from "react";
import Item from './Item';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import './Items.css';
import { useDispatch,useSelector} from 'react-redux';

function Items(){
        const productsList = useSelector((state) => state.products.productsList);



return(
  <div className="body">{ productsList.map((item,index)=><div className="item">{Item(item
  
  
  ,index)} </div>)}
                       
      </div>
)
    

}
export default Items;