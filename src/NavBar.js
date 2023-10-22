import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import './NavBar.css'
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from './store/UserSlice/UserActions';

function  NavBar(){
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const UserDetailes = useSelector((state) => state.user.UserDetailes);

  const isManager = useSelector((state) => state.user.Manager);

    
    return(
    
                <div id="card" >
                <Button id='c1' label="Cart"  icon=' pi pi-shopping-cart' className="p-button-text"  onClick=
                {()=>                    
                       {
                       if(UserDetailes != null)
                       {                        navigate(`/cart`)
}
                       }
                        } />
                <Button   onClick={()=>                    
                        navigate(`/`) }id='c2' label="Products"  icon=' pi pi-table' className="p-button-text" />
                {
                        isManager&&<Button  onClick={()=>                    
                        navigate(`/editProduct`) } id='c3' label="Edit Products"  icon=' pi pi-fw pi-pencil' className="p-button-text" />
                }
                
                
                {/* {
                        localStorage.getItem("Manager")&&<Button  onClick={()=>                    
                        navigate(`donations`) }id='c4' label="Donations"  icon=' pi ' className="p-button-text" />
                } */}
                <Button  onClick={()=>                    
                        navigate(`login`) }id='c5' label="Login"  icon=' pi pi-user' className="p-button-text" />
                <Button  onClick={()=>                      
                         {  
                                if(UserDetailes!=null){
                                dispatch(removeUser({}))
                                   navigate(`login`)        
                         } 
                         }}id='c6' label="LogOut"  icon=' pi pi-power-off' className="p-button-text" />     
                </div>
  
    )
}

export default NavBar;





