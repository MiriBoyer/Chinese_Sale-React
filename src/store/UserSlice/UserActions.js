export function addProductToCart(prod){
    return { type: 'addProductToCart', payload: prod }
}
export function removeProductFromCart(prod){
    return { type: 'removeProductFromCart', payload: prod }
}
export function saveUser(prod){
    return { type: 'saveUser', payload: prod }
}
export function removeUser(prod){
    return { type: 'removeUser', payload: prod }
}
export function yesManager(prod){
    return { type: 'yesManager', payload: prod }
}
export function noManager(prod){
    return { type: 'noManager', payload: prod }
}
export function clearCart(prod){
    return { type: 'clearCart', payload: prod }
}
