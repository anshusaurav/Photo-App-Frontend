import React from 'react';
import {NavLink} from 'react-router-dom'
function HeaderUl () {
  return (
    <ul>
      <li>
        <NavLink to='/' exact={true} activeClassName='active-nav-link'>
          <i aria-hidden='true' className='home large icon'></i>
        </NavLink>
      </li>
      <li>
        <NavLink to='/explore' activeClassName='active-nav-link'>
          <i aria-hidden='true' className='compass outline large icon'></i>
        </NavLink>
      </li>
      <li>
        <NavLink to='/upload' activeClassName='active-nav-link'>
          <i aria-hidden='true' className='camera retro large icon'></i>
        </NavLink>
      </li>
      <li>
        <NavLink to='/user' activeClassName='active-nav-link'>
          <i aria-hidden='true' className='user circle outline large icon'></i>
        </NavLink>
      </li>
    </ul>
  )
}
export default HeaderUl;
