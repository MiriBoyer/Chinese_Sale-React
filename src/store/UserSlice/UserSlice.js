import { produce } from "immer";
const initialState = {
  UserDetailes: null,
  Manager:false,
  Cart:[],
  GlobalAccount:0,
  Count:0
};

export const userReducer = produce((state, action) => {
  switch (action.type) {
    case "saveUser":
      state.UserDetailes=action.payload;
      console.log(state.UserDetailes)
      break;
    case "addProductToCart":
      var item=  state.Cart.find((c)=>c['name']===action.payload['name'])
      if(item==null){
      console.log("if")
        state.Cart.push(action.payload);}
        else{
                  item['count']++;
                  
console.log(item['name'])
console.log(item['count'])
         console.log(state.GlobalAccount)
         console.log(state.Count)
        }
        state.Count++;
         state.GlobalAccount+=action.payload['price'];
      break;
      case "removeProductFromCart":
      var item=  state.Cart.find((c)=>c['name']===action.payload['name'])
      if(item!=null){
        state.Count--;
         state.GlobalAccount-=item['price'];
         item['count']--;
         console.log(item['name'])
console.log(item['count'])}
      break;
    case "removeUser":
      state.UserDetailes=null;
      state.Manager=false;
      state.Cart=[];
      break;
      case "noManager":
      state.Manager=false;
      break;
      case "yesManager":
      state.Manager=true;
      break;
      case "clearCart":
        state.Cart=[];
        break;
  }
}, initialState);
