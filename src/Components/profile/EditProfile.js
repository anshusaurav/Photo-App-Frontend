import React from 'react'
import { Button, TextArea, Input, Form, Image } from 'semantic-ui-react'
class EditProfile extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      name: 'Anshu Saurabh',
      username: 'anshusaurav',
      bio: '',
      email: '',
      isSubmitable: false,
      errorMsgs: null
    }
    this.saveHandler = this.saveHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }
  async saveHandler(event){
    const {email, username, fullname, bio} = this.state;
    const user = {user: {email, username, fullname, bio}};
    const url = 'http://localhost:4000/api/users/';
    try{
      const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      let data = await response.json();
      if(data.errors) {
        //Entry saved shwo new values
      }
      else{
        const errors = [];
        for(const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`);
        }
        this.setState({errorMsgs: errors});
      }
    }
    catch(error) {
      console.error('Error: ', error);
      const errors = [];
      errors.push(error.toString());
      this.setState({errorMsgs: errors});
    }
  }
  changeHandler(event, {name, value}){
    this.setState({[name]: value});
  }
  render () {
    return (
      <div className='edit-profile-main-container'>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <div className='edit-profile-photo-pic'>
              <button className='edit-profile-photo-btn'>
                <Image className='edit-profile-photo'
                  alt='Change Profile Photo'
                  src='https://instagram.fjai5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/106043545_300476081329527_2893810601093728306_n.jpg?_nc_ht=instagram.fjai5-1.fna.fbcdn.net&_nc_ohc=3rAjWpwzX-IAX-HIckk&oh=5b8474a1a73b8b8c82f521faa28e1468&oe=5F3F9510'
                />
              </button>
            </div>
          </div>
          <div className='edit-profile-section-right'>
            <div className='edit-profile-right-inner'>
            <div className='edit-profile-right-header'>
             <p>anshusaurav</p>
             <p className='change-profile-photo'>Change Profile Photo</p>
             </div>
            </div>
          </div>
        </div>
        <Form className='edit-profile-form'>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Name</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input placeholder='First Name' fluid />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Username</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input placeholder='anshusaurav' fluid />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label inline>Bio</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <TextArea placeholder='Bio' style={{ minHeight: 100 }} />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Email</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input placeholder='anshu.saurav@gmail.com' fluid />
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
      </div>
    )
  }
}
export default EditProfile
