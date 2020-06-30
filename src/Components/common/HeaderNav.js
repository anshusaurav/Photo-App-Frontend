import HeaderUl from './HeaderUl';
import React from 'react'
import {Link} from 'react-router-dom'
import GlobalFonts from './../../fonts/fonts'
import PageHeaderCustom from './../PageHeaderCustom';
class HeaderNav extends React.Component {
  constructor (props) {
    super(props);
    
  }
  render () {
    const {toggleLoggedIn} = this.props;
    return (
        <div className='header-nav'>
          <div className='header-inner-div'>
            <Link to='/' exact={true}>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
            </Link>
            <div fallbackElement='[object Object]' class='ui search'>
              <div className='ui icon input'>
                <input
                  type='text'
                  value=''
                  tabindex='0'
                  className='prompt'
                  autocomplete='off'
                />
                <i aria-hidden='true' class='search icon'></i>
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