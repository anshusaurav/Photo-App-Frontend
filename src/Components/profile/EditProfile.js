import React from 'react'
import {Button, TextArea} from 'semantic-ui-react';
class EditProfile extends React.Component{

    render(){
        return (
            <form>
            <div className='edit-profile-section'>
              <label>Name</label>
              <input placeholder='First Name' />
            </div>
            <div className='edit-profile-section'>
              <label>Username</label>
              <input placeholder='anshusaurav' />
            </div>
            <div className='edit-profile-section'>
              <label inline>Bio</label>
              <TextArea placeholder='Last Name' inline/>
            </div>
            <div className='edit-profile-section'>
              <label>Email</label>
              <input placeholder='anshu.saurav@gmail.com' />
            </div>
            <Button type='submit' primary>Submit</Button>
          </form>
        );
    }
}
export default EditProfile;