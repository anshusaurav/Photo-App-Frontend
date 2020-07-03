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
  Header,
  Icon,
  Input
} from 'semantic-ui-react'
import { withRouter, Link } from 'react-router-dom'

class SignupForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      fullname: '',
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
    this.submitUser()
  }

  async submitUser () {
    // console.log(this.contextRef.current);
    const { email, password, username, fullname } = this.state
    const user = { user: { email, password, username, fullname } }
    const url = 'http://localhost:4000/api/users/'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      let data = await response.json();
      if(!data.errors) {
        this.props.history.push('/login');
      }
      else{
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error:', error);
      const errors = []
      errors.push(error.toString());
      this.setState({ errorMsgs: errors })
    }
  }
  checkValidUser () {
    const { email, fullname, username} = this.state
    let data = [];
    let res = true;
    if (email.length < 5 || email.indexOf('@') <= 0) {
      res = false
      data.push('email')
    }
    if (fullname.length === 0) {
      res = false
      data.push('fullname')
    }
    if (username.length === 0) {
      res = false
      data.push('username')
    }
    if (res) return { result: true, data }

    return { result: false, data }
  }
  componentDidMount(){
    this.usernameRef.current.focus();
  }
  render () {
    const { email, fullname, username, password,errorMsgs } = this.state
    return (
      <div className='form-container'>
        <Grid
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <GlobalFonts />
            <FormHeaderCustom>Instagram</FormHeaderCustom>
            <Header size='large'>
              Sign up to see photos from your friends
            </Header>
            <div className='register-facebook-btn-div'>
              <Button fluid color='blue'>
                <Icon name='facebook square'></Icon>Log in with Facebook
              </Button>
            </div>
            <Divider horizontal>Or</Divider>
            {errorMsgs &&
              errorMsgs.map((msg, index) => (
                <Message key={index} color='red'>
                  {msg}
                </Message>
              ))}
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
                  placeholder='Full Name'
                  name='fullname'
                  value={fullname}
                  onChange={this.handleChange}
                  required
                />
                <Input
                  fluid
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={this.handleChange}
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
                  Sign up
                </Button>
              </Segment>
            </Form>

            <p className='signup-form-tnc'>
              By Signing up, you agree to our <span>Terms</span>,{' '}
              <span>Data Policy</span> and <span>Cookies Policy</span>
            </p>
            <Message>
              Have an account?{' '}
              <Link to='login'>
                <Button ref={this.contextRef}>Log in</Button>
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(SignupForm)
