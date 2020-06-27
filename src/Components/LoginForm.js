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
          <Grid.Column style={{ maxWidth: 450 }}>
            <GlobalFonts />
            <FormHeaderCustom>Instagram</FormHeaderCustom>
            <Form size='large'>
              <Segment>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                />

                <Button color='blue' fluid size='large'>
                  Log in
                </Button>
              </Segment>
            </Form>
            <Divider horizontal>Or</Divider>
            <div className='login-facebook-btn-div'>
            <Button>
              <Icon name='facebook square' color='blue'></Icon>Log in with
              Facebook
            </Button>
            </div>
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
