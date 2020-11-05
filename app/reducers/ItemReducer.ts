interface State {
    itemQty: number,
    totalAmount: number,
    localObject: object
}

type Action =  
  | {type: "ADD_ITEM"; totalAmount: number; productId: number; }
  | {type: "REDUCE_ITEM"; totalAmount: number; productId: number; }
  | {type: "ADD_OBJECT"; localObject: object}
  | {type: "REMOVE_OBJECT"; id: number}  

let List:Array<Object> = []
let value:number = 0

export default (state: State, action: Action) => {
    console.log(action.type)
    switch(action.type) {
        case "ADD_ITEM": 
            return [handleIncrement(action.totalAmount, action.productId)]
            break;
        case "REDUCE_ITEM": 
            return [{...state}, handleDecrement(action.totalAmount, action.productId)]
            break; 
        case "ADD_OBJECT":
            console.log(action.type)
            return [{...state}, addObject(action.localObject, action.type)]
            break;
        case "REMOVE_OBJECT": 
            return [{...state}, deleteObject(action.id)]
            break;    
    }
}

const handleIncrement = (payload:number, id:number) => {
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    cart.cart.forEach(cart => {
        if(cart.productId === id) {
            console.log(cart.quantity)
            // ++cart.quantity
            cart.price += payload
            console.log(cart.quantity)
        }
    })
    ++cart.totalQty
    // cart.totalAmount = cart.totalAmount + payload
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

const handleDecrement = (payload:number, id:number) => {
    console.log(payload)
    const cart = JSON.parse(window.localStorage.getItem('cart'))
    cart.cart.forEach(cart => {
        if(cart.productId === id) {
            cart.quantity--
            cart.price -= payload
        }
    })
    cart.totalQty--
    cart.totalAmount = cart.totalAmount + payload
    window.localStorage.setItem('cart', JSON.stringify(cart))
}

const addObject = (value: object, type) => {
    console.log(value, type)
    let flag = false
    List =  JSON.parse(window.localStorage.getItem('cart'))
    console.log(List)
    if(List.cart.length === 0) {
        List.cart.push(value)
        console.log(List)
    }
    else {
        for(let j = 0; j < List.cart.length; j++) {
            console.log(List.cart[j])
            if(List.cart[j].productId === value.productId) {
                List.cart[j].quantity = value.quantity
                flag = true
                break
            }
        }
        if(flag === false) List.cart.push(value)
    }
    List.totalQty += value.quantity
    List.totalAmount += value.quantity * value.price
    window.localStorage.setItem('cart', JSON.stringify(List))
}

const deleteObject = (id: number) => {
    List =  JSON.parse(window.localStorage.getItem('testCart'))
    List.cart.filter(list => list.productId !== id)
    window.localStorage.setItem('testCart', JSON.stringify(List))
}