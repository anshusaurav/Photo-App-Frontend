import React from 'react'
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
  Icon
} from 'semantic-ui-react';
import {withRouter, Link} from 'react-router-dom'

class SignupForm extends React.Component {
  //   state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  //   handleChange = (e, { name, value }) => this.setState({ [name]: value })

  //   handleSubmit = () => {
  //     const { name, email } = this.state

  //     this.setState({ submittedName: name, submittedEmail: email })
  //   }
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      username: '',
      fullname: '',
      password: '',
      isSubmitable: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event, { name, value }) {
    this.setState({ [name]: value })
  }
  handleSubmit (event) {
    event.preventDefault();
    this.submitUser();
  }
  async submitUser () {
    const {email, password, username, fullname} = this.state;
    const user = { user: {email, password, username, fullname} };
    console.log(JSON.stringify(user));
    const url = 'http://localhost:4000/api/users/'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error)
    }
  }
  render () {
    const { email, fullname, username } = this.state;
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
                <Icon name='facebook square'></Icon>Log in with
                Facebook
              </Button>
            </div>
            <Divider horizontal>Or</Divider>
            <Form size='large' onSubmit={this.handleSubmit}>
              <Segment>
                <Form.Input
                  fluid
                  placeholder='E-mail address'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Full Name'
                  name='fullname'
                  value={fullname}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  placeholder='Password'
                  type='password'
                  onChange={this.handleChange}
                />

                <Button color='blue' fluid size='large' onClick={this.handleSubmit}>
                  Sign up
                </Button>
              </Segment>
            </Form>

            <p className='signup-form-tnc'>
              By Signing up, you agree to our <span>Terms</span>,{' '}
              <span>Data Policy</span> and <span>Cookies Policy</span>
            </p>
            <Message>
              Have an account? <Link to='login'><Button>Log in</Button></Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default withRouter(SignupForm)
