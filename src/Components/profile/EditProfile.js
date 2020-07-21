import React from 'react'
import {
  Button,
  TextArea,
  Input,
  Form,
  Image,
  Message
} from 'semantic-ui-react'
class EditProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fullname: '',
      username: '',
      bio: '',
      email: '',
      image: '',
      isSubmitable: false,
      errorMsgs: null,
      loading: true
    }
    this.saveHandler = this.saveHandler.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }
  async saveHandler (event) {
    event.preventDefault()
    const { email, username, fullname, bio } = this.state
    const user = { user: { email, username, fullname, bio } }
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
      if (data.errors) {
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
          email: data.user.email,
          username: data.user.username,
          fullname: data.user.fullname,
          image: data.user.image,
          bio: data.user.bio,
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
  componentDidUpdate () {}
  render () {
    const {
      username,
      fullname,
      bio,
      email,
      image,
      errorMsgs,
      loading
    } = this.state
    console.log(image)
    return (
      <div className='edit-profile-main-container'>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <div className='edit-profile-photo-pic'>
              <button className='edit-profile-photo-btn'>
                <Image
                  className='edit-profile-photo'
                  alt='Change Profile Photo'
                  src={image}
                />
              </button>
            </div>
          </div>
          <div className='edit-profile-section-right'>
            <div className='edit-profile-right-inner'>
              <div className='edit-profile-right-header'>
                <p>{username}</p>
                <p className='change-profile-photo'>Change Profile Photo</p>
              </div>
            </div>
          </div>
        </div>
        <Form
          className='edit-profile-form'
          onSubmit={this.saveHandler}
          loading={loading}
        >
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Name</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input
                  placeholder='Full Name'
                  fluid
                  name='fullname'
                  value={fullname}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Username</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input
                  placeholder='username'
                  fluid
                  name='username'
                  value={username}
                  onChange={this.changeHandler}
                />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Bio</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <TextArea
                  placeholder='Bio'
                  style={{ minHeight: 100 }}
                  name='bio'
                  onChange={this.changeHandler}
                  defaultValue={bio}
                ></TextArea>
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Email</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input
                  placeholder='Email'
                  fluid
                  value={email}
                  name='email'
                  onChange={this.changeHandler}
                />
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
export default EditProfile
