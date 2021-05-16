import React from "react";
import { NavBar } from './Styled.js';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <React.Fragment>
      <div>
        <h1 className='text-center mt-5'>Online Based Cloud Pizza Delivery Service</h1>
          <NavBar className='list-unstyled lead d-flex justify-content-around'>
            <NavLink id='order-pizza' to='/' className=''><b>Home</b></NavLink>
            <NavLink to='/menu' className=''><b>Toppings</b></NavLink>
            <NavLink id='pizza-form' to='/pizza' className=''><b>Build Your Pizza</b></NavLink>
          </NavBar>
      </div>
    </React.Fragment>
  );
};

export default Nav;
