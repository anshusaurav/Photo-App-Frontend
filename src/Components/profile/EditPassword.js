import React from 'react'
import { Button, Input, Form, Image } from 'semantic-ui-react'
class EditPassword extends React.Component {
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
             </div>
            </div>
          </div>
        </div>
        <Form className='edit-profile-form'>
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
                <Input  fluid />
              </div>
            </div>
          </div>
         
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'>
              <label>Confirm New Password</label>
            </div>
            <div className='edit-profile-section-right'>
              <div className='edit-profile-right-inner'>
                <Input  fluid />
              </div>
            </div>
          </div>
          <div className='edit-profile-section'>
            <div className='edit-profile-section-left'></div>
            <div className='edit-profile-section-right'>
              <Button type='submit' primary>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
export default EditPassword
