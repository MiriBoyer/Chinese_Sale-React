import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css"; 
import "./Login.css"
import { useNavigate } from 'react-router-dom';
import { saveUser } from './store/UserSlice/UserActions';
import { useSelector, useDispatch } from "react-redux";
import { noManager } from './store/UserSlice/UserActions';
import { yesManager } from './store/UserSlice/UserActions';
import swal from 'sweetalert';

function  Login(){
    const dispatch = useDispatch();
    const UserDetailes = useSelector((state) => state.user.UserDetailes);

    const navigate = useNavigate();
const [name,SetName] = useState("");
const [email,SetEmail] = useState("");
const [password,SetPassword] = useState("");
function submit(e){
    if(name===""||email===""||password==="")
    {
        swal("Required fields")
    }
    else{
        if((name=='melly' &&password=='12345'&&email=='12345@12345')||(name=='miri' &&password=='1'&&email=='1'))
        {
            swal("Welcome manager!");
            dispatch(yesManager({}))
        }
else
dispatch(noManager({}))

dispatch(saveUser({name:name,email:email,password:password}))                  
       navigate(`/`)
        
    } 

}

return(
 <>
 <div id="form">

 <InputText  type="text" placeholder="Enter Name" onChange={(e) => SetName(e.target.value)} ></InputText><br/>
    <InputText type="text" className="p-password p-component p-inputwrapper p-input-icon-right" placeholder="Enter Password " onChange={(e) => SetEmail(e.target.value)} >
        </InputText><br/>
 <InputText id="mail"   type="email" placeholder=" Enter Email" onChange={(e) => SetPassword(e.target.value)} ></InputText><br/>
 <Button label="Submit" onClick={(e)=>submit(e)} />
 </div>

 </>
)
}
export default Login;