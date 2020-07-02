import React from 'react'
import ProfileImages from '../profile/ProfileImages'
import { Button } from 'semantic-ui-react'
class ProfilePicturePopUp extends React.Component {
  render () {
    return (
      <div className='change-picture-pop-outer-div'>
        <div className='change-picture-pop-inner-div'>
          <div><h2>Change Profile Picture</h2></div>
          <Button className='change-picture-pop-btn' fluid>Upload Photo</Button>
          <Button className='change-picture-pop-btn' fluid>Remove Current Photo</Button>
          <Button className='change-picture-pop-btn' fluid>Cancel</Button>
        </div>
      </div>
    )
  }
}
export default ProfilePicturePopUp
