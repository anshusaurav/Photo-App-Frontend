import React from 'react'
import { Button, Input, Form, Image, Message } from 'semantic-ui-react'
class EditPassword extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: '',
      username: '',
      email:'',
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      errorMsgs: [],
      loading: true,
    }

    this.saveHandler = this.saveHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }
  async saveHandler (event) {
    event.preventDefault()
    const { newPassword, confirmNewPassword } = this.state
    
    if (newPassword !== confirmNewPassword) {
      this.setState(prevState => ({
        errorMsgs: ['New passwords dont match']
      }))
      return;

    }
    const verifyOldPassword= await this.checkOldPassword();
    console.log(verifyOldPassword);
    if(!verifyOldPassword) {
      this.setState(prevState =>{
        return ({
          errorMsgs: ['Old password is incorrect']
        })
      })
      return;
    }
   
    const user = { user: { password: newPassword } }
    const url = 'http://localhost:4000/api/user/'
    const { jwttoken } = localStorage
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${jwttoken}`
        },
        body: JSON.stringify(user)
      })
      let data = await response.json()
      if (!data.errors) {
        //Entry saved shwo new values
      } else {
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error: ', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  async checkOldPassword() {
    const { email, oldPassword } = this.state
    const user = { user: { email, password: oldPassword } }
    const url = 'http://localhost:4000/api/users/login'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      let data = await response.json()
      // console.log(data)
      if (!data.errors) {
       return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  changeHandler (event, { name, value }) {
    console.log(name, value)
    this.setState({ [name]: value })
  }
  async saveSettings () {
    const url = 'http://localhost:4000/api/user'
    const { jwttoken } = localStorage
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()
      console.log(data)
      if (!data.errors) {
        this.setState({
          image: data.user.image,
          email: data.user.email,
          username: data.user.username,
          loading: false
        })
      }
    } catch (error) {
      console.error('Error: ', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  componentDidMount () {
    this.saveSettings()
  }
  render () {
    const { username, image, loading, errorMsgs } = this.state;
    return (
      <div className='edit-profile-main-container'>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <div className='edit-profile-photo-pic'>
              <button className='edit-profile-photo-btn'>
                <Image className='edit-profile-photo' src={image} />
              </button>
            </div>
          </div>
          <div className='edit-profile-section-right'>
            <div className='edit-profile-right-inner'>
              <div className='edit-profile-right-header'>
                <p>{username}</p>
              </div>
            </div>
          </div>
        </div>
        <Form className='edit-profile-form' onSubmit={this.saveHandler}>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Old Password</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input fluid />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>New Password</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input fluid />
              </div>
            </div>
          </div>

          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Confirm New Password</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input fluid />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'></div>
            <div className='edit-profile-section-right'>
              <Button type='submit' primary onClick={this.saveHandler}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
        {errorMsgs &&
          errorMsgs.map((msg, index) => (
            <Message key={index} color='red'>
              {msg}
            </Message>
          ))}
      </div>
    )
  }
}
export default EditPassword
