import React from 'react';
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/084 crown.svg'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart/cart-dropdown.component';

import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart.selectors.js';
import {selectCurrentUser} from '../../redux/user/user.selectors.js';


const Header =({currentUser ,hidden})=>(

    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={()=>auth.signOut()}> SIGN OUT</div>
                :
                <Link className='option' to='/signin'> SIGN IN</Link>
            }

            <CartIcon />
        </div>
        {hidden
             ? null
             :  <CartDropdown />}
    </div>
)


const mapStateToProps =  createStructuredSelector({

    currentUser : selectCurrentUser,
    hidden : selectCartHidden

})

export default connect(mapStateToProps) (Header);