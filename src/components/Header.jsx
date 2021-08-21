import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '@context/AppContext';
import Title from './Title';

import Rem from '@assets/rem.png';
import '../styles/components/Header.styl';

const Header = () => {
  const cart = async () => {
    const { cart } = await useContext(AppContext);
  };
  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">Platzi Store</Link>
        <img src={Rem} alt="" width="100px" />
        <Title title="La platzi store" />
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export default Header;
