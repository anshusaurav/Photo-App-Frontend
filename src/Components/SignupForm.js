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
} from 'semantic-ui-react'

class LoginForm extends React.Component {
  //   state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  //   handleChange = (e, { name, value }) => this.setState({ [name]: value })

  //   handleSubmit = () => {
  //     const { name, email } = this.state

  //     this.setState({ submittedName: name, submittedEmail: email })
  //   }

  render () {
    return (
      <div class='form-container'>
        <Grid
          textAlign='center'
          style={{ height: '100vh' }}
          verticalAlign='middle'
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <GlobalFonts />
            <FormHeaderCustom>Altgram</FormHeaderCustom>
            <Header size='large'>
              Sign up to see photos from your friends
            </Header>
            <div className='register-facebook-btn-div'>
              <Button fluid color='blue'>
                <Icon name='facebook square' color='white'></Icon>Log in with
                Facebook
              </Button>
            </div>
            <Divider horizontal>Or</Divider>
            <Form size='large'>
              <Segment>
                <Form.Input fluid placeholder='E-mail address' />
                <Form.Input fluid placeholder='Full Name' />
                <Form.Input fluid placeholder='Username' />
                <Form.Input fluid placeholder='Password' type='password' />

                <Button color='blue' fluid size='large'>
                  Sign up
                </Button>
              </Segment>
            </Form>
           

            <p className='signup-form-tnc'>By Signing up, you agree to our <span>Terms</span>, <span>Data Policy</span> and <span>Cookies Polity</span></p>
            <Message>
              Don't have an account? <Button>Sign Up</Button>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default LoginForm
