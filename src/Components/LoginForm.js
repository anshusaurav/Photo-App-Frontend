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
  Icon
} from 'semantic-ui-react'

import { withRouter, Link } from 'react-router-dom'
class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      isSubmitable: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.contextRef = createRef()
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
    console.log(this.contextRef.current)
    const { email, password } = this.state
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
    } catch (error) {
      console.error('Error:', error)
    }
  }
  checkValidUser () {
    const { email, password } = this.state
    let data = []
    // const emailRegex = '/\S+@\S+\.\S+/';
    const found = email.match('/@/')
    let res = true
    if (email.length < 5 || email.indexOf('@') <= 0) {
      res = false
      data.push('email')
    }
    if (res) return { result: true, data }

    return { result: false, data }
  }

  render () {
    const {email, password} = this.state;
    return (
      <div class='form-container'>
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
              <Form.Input
                  fluid
                  placeholder='E-mail address'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                 <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  name='password'
                  minlength='4'
                  defaultValue={password}
                  onChange={this.handleChange}
                  required
                />

                <Button color='blue' fluid size='large'>
                  Log in
                </Button>
              </Segment>
            </Form>
            <Divider horizontal>Or</Divider>
            <div className='login-facebook-btn-div'>
              <Button color='white'>
                <Icon name='facebook square' color='blue'></Icon>Log in with
                Facebook
              </Button>
            </div>
            <div className='forgot-password-btn-div'>
              <Button className='forgot-password-btn' color='white'>
                Forgot Password?
              </Button>
            </div>
            <Message>
              Don't have an account?{' '}
              <Link to='/signup'>
                <Button ref={this.contextRef}>Sign Up</Button>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(LoginForm)
