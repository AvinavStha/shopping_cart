import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({ id, imgUrl, name, price, quantity }) => {

    const { removeItem, increment, decrement } = useContext(CartContext);

    return (
        <div className="itemInfo">

            <div className="featuredItem">

                <div className="featuredItemImg">
                    <img src={imgUrl} alt="image" />
                </div>

                <span className="featuredTitle">{name}</span>

                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${price}</span>
                </div>
                <div className="addMinus">
                    <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity} disabled />
                    <i className="fas fa-plus add" onClick={() => increment(id)}></i>
                </div>
                <div className="removeItem">
                <button className="remove_item" onClick={() => removeItem(id)}>
                        Remove
                    </button>
                </div>
                    


            </div>

        </div>
    )
}

export default Items