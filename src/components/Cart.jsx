import { useDispatch, useSelector } from "react-redux";
import ItemListAccordion from "./ItemListAccordion";
import { clearItems } from '../utils/cartSlice';

const Cart = () =>{

    //subcribe right portion of the story if not then performance issue
        // it update whenever any chnage is user slice to cart slice also gets affected 
    // const cartItems = useSelector((store) => store)
    const cartItems = useSelector((store) => store.cart.cartItems)
    console.log("@@@", cartItems)

    const dispatch = useDispatch()

    const clearCart = () =>{
        dispatch(clearItems())
    }
    return(
        <div className="text-center m-2 p-2">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={clearCart}> clear Cart</button>
            {cartItems.length ===0 && <h1> Cart is Empty</h1>}
            <div className="w-6/12 m-auto">
                <ItemListAccordion items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart