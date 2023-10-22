import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
// import 'primeflex/primeflex.css';
import swal from 'sweetalert';
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import './Edit.css';
import { addProduct } from './store/ProductSlice/ProductActions';

import { removeProduct } from './store/ProductSlice/ProductActions';
import { useSelector, useDispatch } from "react-redux";
const ShowItemToManager = (data2) => {
    const dispatch = useDispatch();
const data={
    id:data2['id'],
    name:data2['name'],
    subHeader:data2['subHeader'],
    img:data2['img'],
    description:data2['description'],
    price:data2['price']
}
    return (
        <div className="product-item">
                 <img src={`${data2.img}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data2.name} />
                 <div className="product-detail">
                     <div className="product-name">{data2.name}</div>
                     <div className="product-description1">{data2.subHeader}</div>
                     <div className="product-description">{data2.description}</div>
                 </div>
                 <div className="product-action">
                     <span className="product-price">${data2.price}</span>

                     <Button  icon="pi pi-pencil" label="" onClick={()=>{
swal({
    text: "Enter The Name of Item :",
    content:{
        element: "input",
        attributes: {
          value: data['name'],
        }},
    buttons: {
      confirm: {
        value: data['name'],
      },
    },
  })
  .then((value) => {
    if(value!=="")
    data['name']=value;
    swal({
        text: "Enter The Sub Header of Item :",
        content:{
            element: "input",
            attributes: {
              value: data['subHeader'],
            }},
        buttons: {
          confirm: {
            value: data['subHeader'],
          },
        },
      }).then((value) => {
        if(value!=="")
        data['subHeader']=value;
        swal({
            text: "Enter The Description of Item :",
            content:{
                element: "input",
                attributes: {
                  value: data['description'],
                }},            buttons: {
              confirm: {
                value: data['description'],
              },
            },
          }).then((value) => {
            if(value!=="")
            data['description']=value;
            swal({
                text: "Enter The Src of The Image of Item :",
                content:{
                    element: "input",
                    attributes: {
                      value: data['img'],
                    }},
                                    buttons: {
                  confirm: {
                    value: data['img'],
                  },
                },
              }).then((value) => {
                if(value!=="")
                data['img']=value;
                swal({
                    text: "Enter The Price of Item :",
                    content:{
                        element: "input",
                        attributes: {
                          value: data['price'],
                        }},                    buttons: {
                      confirm: {
                        value: data['price'],
                      },
                    },
                  }).then((value)=>{
                    if(value!=="")
                    data['price']=value;
                    console.log(data)
                    dispatch(addProduct(data))
                  }

                  )
              
              
              
          })
              
      })})})

      }}>
      </Button>

                     <Button icon="pi pi-trash" label="" onClick={
                        ()=>{dispatch(removeProduct(data.id));}}></Button>
                 </div>
             </div>
    )
}
function EditProduct(){
    const dispatch = useDispatch();
    const data=    { id: -1, name: '', subHeader: '', description: ``,  img: '', price: 0}
    const products = useSelector((state) => state.products.productsList);
    return(
        <>
       <div >
        { products.map((item)=><div >{ShowItemToManager(item)} </div>)}
      </div>
      <br></br>
      <br></br>
      <div className='addButton'>
      <Button  icon="pi pi-plus" label="Add Item" onClick={()=>{
swal({
    text: "Enter The Name of Item :",
    content:{
        element: "input",
        attributes: {
          value: data['name'],
        }},
    buttons: {
      confirm: {
        value: data['name'],
      },
    },
  })
  .then((value) => {
    data['name']=value;
    swal({
        text: "Enter The Sub Header of Item :",
        content:{
            element: "input",
            attributes: {
              value: data['subHeader'],
            }},
        buttons: {
          confirm: {
            value: data['subHeader'],
          },
        },
      }).then((value) => {
        data['subHeader']=value;
        swal({
            text: "Enter The Description of Item :",
            content:{
                element: "input",
                attributes: {
                  value: data['description'],
                }},            buttons: {
              confirm: {
                value: data['description'],
              },
            },
          }).then((value) => {
            data['description']=value;
            swal({
                text: "Enter The Src of The Image of Item :",
                content:{
                    element: "input",
                    attributes: {
                      value: data['img'],
                    }},
                                    buttons: {
                  confirm: {
                    value: data['img'],
                  },
                },
              }).then((value) => {
                data['img']=value;
                swal({
                    text: "Enter The Price of Item :",
                    content:{
                        element: "input",
                        attributes: {
                          value: data['price'],
                        }},                    buttons: {
                      confirm: {
                        value: data['price'],
                      },
                    },
                  }).then((value)=>{
                    data['price']=value;
                    console.log(data)
                    dispatch(addProduct(data))
                  }

                  )
              
              
              
          })
              
      })})})

      }}>
      </Button></div>
        </>
    )
    
}
export default EditProduct