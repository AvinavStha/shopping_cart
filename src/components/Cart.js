import React, { useReducer, createContext, useEffect } from 'react';
import './cart.css';
import { products } from './Products';
import ContextCart from './ContextCart';
import { reducer } from './reducer';
export const CartContext = createContext();
const Cart = () => {

    // const [item, setItem] = useState(products);
    const initialState = {
        item: products,
        totalAmount: 0,
        totalItem: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        });
    };

    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };
    const decrement = (id) => {
        return dispatch({
            type: "DECREMENT",
            payload: id,
        });
    };

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
    },[state.item]);
    return (
        <>

            < CartContext.Provider value={{ ...state, removeItem, increment, decrement, clearCart }}>
                <ContextCart />
            </CartContext.Provider>

        </>
    );
};  
export default Cart;