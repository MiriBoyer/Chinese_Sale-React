import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from './store/UserSlice/UserActions';
import './PayMent.css'
import swal from 'sweetalert';
export function PayMent() {
  const dispatch = useDispatch();
  const UserDetailes = useSelector((state) => state.user.UserDetailes);
  const cart = useSelector((state) => state.user.Cart);
  const navigate = useNavigate();
  const [name, SetName] = useState(UserDetailes!=null?UserDetailes['name']:"Enter Name");
  const [email, SetEmail] = useState(UserDetailes!=null?UserDetailes['email']:"Enter Email");
  const [phone, SetPhone] = useState("");
  const [creditNumber, SetCreditNumber] = useState("");
  const [validity, SetValidity] = useState("");
  const [cvd, SetCvd] = useState("");

  function submit(e) {
    if (name === "" || email === "" || phone === "" || creditNumber === "" || validity === "" || cvd === "") {
      swal("Required fields");
    }
    else {
        dispatch(clearCart(cart));
      swal("Thank You!", "The details have been successfully added,You are a lifesaver!!", "success");
      (navigate(`/`))
    }
  }
  return (<>
    <div className='details'>   <div className='d'>  <label htmlFor="name">Name        </label> <InputText id="name" type="text" placeholder={name}
      onChange={(e) => SetName(e.target.value)}
    ></InputText></div>

      <div className='d'>  <label htmlFor="email">mail        </label> <InputText id="email" type="email" placeholder={email}
        onChange={(e) => SetEmail(e.target.value)}
      ></InputText></div>
      <div className='d'>
        <label htmlFor="phone">Phone       </label>
        <InputText id="phone" type="text" placeholder=" Enter PhoneNumber"
          onChange={(e) => SetPhone(e.target.value)}
        ></InputText></div>

      <div className='d'>  <label htmlFor="creditNumber">CreditNumber</label>   <InputMask
        id="creditNumber"
        mask="9999-9999-9999-9999"
        value={creditNumber}
        placeholder="9999-9999-9999-9999"
        onChange={(e) => SetCreditNumber(e.target.value)}
      ></InputMask></div>
      <div className='d'>  <label htmlFor="validity">Validity    </label>
        <InputMask id="validity" mask="99/9999"
          value={validity}
          placeholder="99/9999" slotChar="dd/yyyy"
          onChange={(e) => SetValidity(e.target.value)}
        ></InputMask></div>
      <div className='d'>  <label htmlFor="cvd">Cvd         </label>
        <InputMask id="cvd " mask="999"
          value={cvd}
          placeholder="999"
          onChange={(e) => SetCvd(e.target.value)}
        ></InputMask></div>
      <div className='submit'> <Button label="Submit" onClick={(e) => submit(e)} /></div></div>
  </>)
}
export default PayMent;