import { useContext } from 'react';
import {Outlet, Link} from 'react-router-dom';
import './navigation.styles.scss'
import {ReactComponent as CrwnLogo} from '../../../assets/crown.svg'
import CartIcon from '../../cart-icon/cart-icon.component';
import CartDropdown from '../../cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../../context/user.context'
import { CartContext } from '../../../context/cart.context'

import { signOutUser } from '../../../utils/firebase/firebase.utils';
 
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
		const { isCartOpen } = useContext(CartContext);
		
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <div>
                    <CrwnLogo className='logo'/>
                </div>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {currentUser? (
										<span className='nav-link' onClick={signOutUser}>SING OUT</span>
									):(
										<Link className='nav-link' to='/auth'>
											SIGN IN
										</Link>
									)
                }
                <CartIcon />
            </div>
						{isCartOpen && <CartDropdown />}
        </div>
        <Outlet />
      </>
    );
  };

 export default Navigation;