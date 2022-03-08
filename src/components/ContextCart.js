import React, { useContext } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { ShoppingCart } from '@material-ui/icons';
import { CartContext } from './Cart'; //deafult keyword bina export garna paryo vanne curly braces lagaune
const ContextCart = () => {

    // const [item, setItem] = useState(products);

    const { item, totalItem, totalAmount, clearCart } = useContext(CartContext); //curly braces in item is used as destructuring 

    if (item.length === 0) {
        return (
            <>
                <header>
                    <div className="cart">
                        <div className="cartWrapper">
                            <div className="cartLeft">
                                <span className="B_name">E-commerce</span>
                            </div>
                            <div className="cartRight">
                                <div className="cartIconContainer">
                                    <ShoppingCart style={{ height: "30px", width: "30px" }} />
                                    <span className="cartIconBag">{totalItem}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="pageName">
                    <h1>Shopping Cart</h1>
                    <p> You have <span> {totalItem} </span> {""} items in your shopping cart</p>
                </div>
            </>
        );
    }

    return (
        <>
            <header>
                <div className="cart">
                    <div className="cartWrapper">
                        <div className="cartLeft">
                            <span className="B_name">E-commerce</span>
                        </div>
                        <div className="cartRight">
                            <div className="cartIconContainer">
                                <ShoppingCart style={{ height: "30px", width: "30px" }} />
                                <span className="cartIconBag">{totalItem}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="pageName">
                <h1>Shopping Cart</h1>
                <p> You have <span> {totalItem} </span> items in your shopping cart</p>
            </div>
            <section className="cartSection">
                <div className='shoppingCart'>
                    <Scrollbars style={{ width: "120vh", height: "85vh" }}>
                        {
                            item.map((curItem) => {
                                return <Items key={curItem.id} {...curItem} /> //spread operator
                            })
                        }

                    </Scrollbars>
                </div>
                <div className="itemAddedToCart">
                    <div className="itemTotal">
                        <h3>
                            Total:
                            <span>${totalAmount}</span>
                        </h3>
                        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>

            </section>
        </>
    );
};

export default ContextCart;