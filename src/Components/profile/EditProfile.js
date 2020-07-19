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
            <Input placeholder='First Name' />
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label>Username</label>
          </div>
          <div className='edit-profile-section-right'>
            <Input placeholder='anshusaurav' />
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label inline>Bio</label>
          </div>
          <div className='edit-profile-section-right'>
            <TextArea placeholder='Last Name' style={{ minHeight: 100 }}/>
          </div>
        </div>
        <div className='edit-profile-section'>
          <div className='edit-profile-section-left'>
            <label>Email</label>
          </div>
          <div className='edit-profile-section-right'>
            <Input placeholder='anshu.saurav@gmail.com' />
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
