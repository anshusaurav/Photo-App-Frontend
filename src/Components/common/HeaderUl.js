import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
class HeaderUl extends React.Component {
  constructor (props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){
    event.preventDefault();
    const { history} = this.props;
    
    this.props.toggleLoggedIn();
    localStorage.removeItem('jwttoken');
    localStorage.removeItem('loggedInUser');
    history.push('/');
  }
  render () {
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
            <i
              aria-hidden='true'
              className='user circle outline large icon'
            ></i>
          </NavLink>
        </li>
        <li>
          <div className='header-logout-btn-div'>
            <Button onClick = {this.clickHandler}>
              <Icon name='power off' className='large' />
            </Button>
          </div>
        </li>
      </ul>
    )
  }
}
export default withRouter(HeaderUl);
