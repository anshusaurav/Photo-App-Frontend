import React, { createRef } from 'react'
import GlobalFonts from './../fonts/fonts'
import FormHeaderCustom from './FormHeaderCustom'
import {
  Button,
  Form,
  Grid,
  Message,
  Segment,
  Divider,
  Input,
  Icon
} from 'semantic-ui-react'

import { withRouter, Link } from 'react-router-dom'
class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isSubmitable: false,
      errorMsgs: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.usernameRef = createRef()
  }

  handleChange (event, { name, value }) {
    this.setState({ [name]: value })
    if (this.checkValidUser().result) {
      this.setState({ isSubmitable: true })
    } else {
      this.setState({ isSubmitable: false })
    }
  }
  handleSubmit (event) {
    event.preventDefault()
    this.submitLogin()
  }

  async submitLogin () {
    const { email, password } = this.state
    const { history, toggleLoggedIn } = this.props
    const user = { user: { email, password } }
    const url = 'http://localhost:4000/api/users/login'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      let data = await response.json()
      console.log(data)
      if (!data.errors) {
        localStorage.setItem('jwttoken', data.user.token)
        localStorage.setItem('loggedInUser', JSON.stringify(data.user))
        toggleLoggedIn()
        history.push('/')
      } else {
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error:', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  checkValidUser () {
    const { email } = this.state
    let data = []
    let res = true
    if (email.length < 5 || email.indexOf('@') <= 0) {
      res = false
      data.push('email')
    }
    if (res) return { result: true, data }

    return { result: false, data }
  }
  componentDidMount () {
    this.usernameRef.current.focus()
  }
  render () {
    console.log('render', this.usernameRef);
    const { email, password, errorMsgs } = this.state
    return (
      <div className='form-container'>
      {/* <input type='text' ref={this.usernameRef} placeholder='dasdas'/> */}
        <Grid
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <GlobalFonts />
            <FormHeaderCustom>Instagram</FormHeaderCustom>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
                <Input
                  fluid
                  placeholder='E-mail address'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  ref={this.usernameRef}
                  required
                />
                <Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name='password'
                  minLength='4'
                  defaultValue={password}
                  onChange={this.handleChange}
                  required
                />

                <Button
                  color='blue'
                  fluid
                  size='large'
                  onClick={this.handleSubmit}
                  disabled={!this.state.isSubmitable}
                >
                  Log in
                </Button>
              </Segment>
            </Form>
            {errorMsgs &&
              errorMsgs.map((msg, index) => (
                <Message key={index} color='red'>
                  {msg}
                </Message>
              ))}
            <Divider horizontal>Or</Divider>
            <div className='login-facebook-btn-div'>
              <Button>
                <Icon name='facebook square' color='blue'></Icon>Log in with
                Facebook
              </Button>
            </div>
            <div className='forgot-password-btn-div'>
              <Button className='forgot-password-btn'>Forgot Password?</Button>
            </div>
            <Message>
              Don't have an account?{' '}
              <Link to='/signup'>
                <Button>Sign Up</Button>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(LoginForm)
