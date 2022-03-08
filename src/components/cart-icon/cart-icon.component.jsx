import React from 'react';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action.js';
import {selectCartItemCount} from '../../redux/cart/cart.selectors.js'

import {ReactComponent as ShoppingIcon} from '../../assets/122 shopping-bag.svg';
import './cart-icon.styles.scss'


const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon  className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)





const mapStateToProps = state =>({
  itemCount : selectCartItemCount(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartIcon);