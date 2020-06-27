import React from 'react'
import GlobalFonts from './../fonts/fonts';
import  FormHeaderCustom from './FormHeaderCustom'
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react'



class LoginForm extends React.Component {
//   state = { name: '', email: '', submittedName: '', submittedEmail: '' }

//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

//   handleSubmit = () => {
//     const { name, email } = this.state

//     this.setState({ submittedName: name, submittedEmail: email })
//   }

  render () {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <GlobalFonts/>
          <FormHeaderCustom>
            Instagram
          </FormHeaderCustom>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />
    
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? Sign Up
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default LoginForm
