import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//connect nous permet de modifier notre composant afin qu'il ait accès
// à la bibli redux

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selecteurs";
import { selectCurrentUser } from "../../redux/user/user.selecteurs";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
//le header qui sera toujours fixé à la page visitée
const Header = ({ currentUser, hidden }) => (
	//notre header doit  connaître l'état de l'utilisateur
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>

		<div className='options'>
			<Link className='option' to='/boutique'>
				Boutique
			</Link>
			<Link className='option' to='/shop'>
				Contact
			</Link>
			{currentUser ? (
				<div className='option' onClick={() => auth.signOut()}>
					Se déconnecter
				</div>
			) : (
				<Link className='option' to='/signin'>
					Se connecter
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden // on veut le root reducer, dans ce root reducer
	//on veut la valeur de user, qui nous donne userReducer, dont on veut currentUser
});

export default connect(mapStateToProps)(Header);
