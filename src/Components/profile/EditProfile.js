import React from 'react'
import { Button, TextArea, Input, Form} from 'semantic-ui-react'
class EditProfile extends React.Component {
  render () {
    return (
      <Form className='edit-profile-form'>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label>Name</label>
          </div>
          <div className='edit-profile-section-right'>
            <div className='edit-profile-right-inner'>
            <Input placeholder='First Name' fluid/>
            </div>
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label>Username</label>
          </div>
          <div className='edit-profile-section-right'>
          <div className='edit-profile-right-inner'>
            <Input placeholder='anshusaurav' fluid/>
            </div>
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label inline>Bio</label>
          </div>
          <div className='edit-profile-section-right'>
          <div className='edit-profile-right-inner'>
            <TextArea placeholder='Bio' style={{ minHeight: 100 }}/>
            </div>
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label>Email</label>
          </div>
          <div className='edit-profile-section-right'>
          <div className='edit-profile-right-inner'>
            <Input placeholder='anshu.saurav@gmail.com' fluid/>
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
    )
  }
}
export default EditProfile
