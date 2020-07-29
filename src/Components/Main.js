import React from 'react'
import ExplorePage from './ExplorePage'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import ProfilePage from './ProfilePage'
import UploadForm from './UploadForm'
import HomePage from './HomePage'
import SettingsPage from './SettingsPage'
import OtherUserPage from './OtherUserPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
    this.toggleLoggedIn = this.toggleLoggedIn.bind(this)
  }
  toggleLoggedIn() {
    this.setState({ isLoggedIn: !this.state.isLoggedIn })
  }
  componentDidMount() {
    if (
      localStorage.getItem('jwttoken') &&
      localStorage.getItem('loggedInUser')
    )
      this.setState({ isLoggedIn: true })
  }
  render() {
    const { jwttoken } = localStorage;
    return (
      <Router>
        <Switch>
          <Route exact path='/login'>
            {!jwttoken ? (
              <LoginForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/' />
              )}
          </Route>
          <Route exact path='/signup'>
            {!jwttoken ? (
              <SignupForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/' />
              )}
          </Route>
          <Route exact path='/explore'>
            {jwttoken ? (
              <ExplorePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/login' />
              )}
          </Route>
          <Route exact path='/user'>
            {jwttoken ? (
              <ProfilePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/login' />
              )}
          </Route>
          <Route exact path='/upload'>
            {jwttoken ? (
              <UploadForm toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/login' />
              )}
          </Route>
          <Route exact path='/'>
            {jwttoken ? (
              <HomePage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/login' />
              )}
          </Route>
          <Route exact path='/settings' >
            {jwttoken ? (
              <SettingsPage toggleLoggedIn={this.toggleLoggedIn} />
            ) : (
                <Redirect to='/login' />
              )}
          </Route>
          <Route path='/:username' >
            {jwttoken ? (
              <OtherUserPage toggleLoggedIn={this.toggleLoggedIn} />
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
