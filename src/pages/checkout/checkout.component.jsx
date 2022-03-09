import React from 'react';
import './checkout.styles.scss'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect';
import { selectCartItems , selectCartTotal } from '../../redux/cart/cart.selectors.js';


const Chekout =({cartItems , total})=>(
    <div className='checkout-page'>
    <div className= 'checkout-header'>

        <div className='header-block'>
            <span className='' >Product</span>
        </div>

        <div className='header-block'>
            <span className='' >Description</span>
        </div>

        <div className='header-block'>
            <span className='' >Quntity</span>
        </div>

        <div className='header-block'>
            <span className='' >Price</span>
        </div>

        <div className='header-block'>
            <span className='' >Remove</span>
        </div>
    </div>

    { cartItems.map((cartItem)=>(
        cartItem.name
    ))}
    <div className='total'>
        <span>TOTAL : $ {total}</span>
    </div>
    </div>
)


const mapStateToProps = createStructuredSelector({

    cartItems : selectCartItems,
    total : selectCartTotal
})
export default connect(mapStateToProps)(Chekout)