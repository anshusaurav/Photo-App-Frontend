import HeaderUl from './HeaderUl';
import React from 'react'
import {Link} from 'react-router-dom'
import GlobalFonts from './../../fonts/fonts'
import PageHeaderCustom from './../PageHeaderCustom';
class HeaderNav extends React.Component {
  
  render () {
    const {toggleLoggedIn} = this.props;
    return (
        <div className='header-nav'>
          <div className='header-inner-div'>
            <Link to='/' exact='true'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
            </Link>
            <div className='ui search'>
              <div className='ui icon input'>
                <input
                  type='text'
                  tabIndex='0'
                  className='prompt'
                  autoComplete='off'
                />
                <i aria-hidden='true' className='search icon'></i>
              </div>
              <div className='results transition'>
                <div className='message empty'>
                  <div className='header'>No results found.</div>
                </div>
              </div>
            </div>
            <HeaderUl toggleLoggedIn={toggleLoggedIn}/>
          </div>
        </div>
    )
  }
}

export default HeaderNav