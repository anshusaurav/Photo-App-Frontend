import React from 'react'
import ExplorePage from './ExplorePage'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ProfilePage from './ProfilePage'
import UploadForm from './UploadForm'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.toggleLoggedIn = this.toggleLoggedIn.bind(this)
  }
  toggleLoggedIn () {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }
  componentDidMount () {
    if (
      localStorage.getItem('jwttoken') &&
      localStorage.getItem('loggedInUser')
    )
      this.setState({ isLoggedIn: true })
  }
  render () {
    const { isLoggedIn } = this.state;
    const {jwttoken} = localStorage;
    console.log(isLoggedIn);
    return (
      <Router>
        <Switch>
          <Route path='/login'>
            {!jwttoken ? (
              <LoginForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/'  />
            )}
          </Route>
          <Route path='/signup'>
            {!jwttoken ? (
              <SignupForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/' />
            )}
          </Route>
          <Route path='/explore'>
            {jwttoken ? (
              <ExplorePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path='/user'>
            {jwttoken ? (
              <ProfilePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/login'/>
            )}
          </Route>
          <Route path='/upload'>
            {jwttoken ? (
              <UploadForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path='/' exact={true}>
            {jwttoken ? (
              <HomePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default Main
