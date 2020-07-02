import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import ProfilePicturePopUp from '../common/ProfilePicturePopUp'
class ProfileHero extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isProfilePicturePopupOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen () {
    this.setState({ isProfilePicturePopupOpen: true })
  }
  handleClose () {
    this.setState({ isProfilePicturePopupOpen: false })
  }
  render () {
    var profilePicture =
      'https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/s320x320/50517569_544196982755555_8719396859195424768_n.jpg?_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=Q5RDkiY_kooAX-vLlHl&oh=a70d626e97089535362d002e8a46004f&oe=5F21F5F3'
    const {
      fullname,
      username,
      numFollowing,
      numFollowers,
      numPosts
    } = this.props.profile

    return (
      <div className='profile-user-inner-div'>
        <div className='profile-picture-outer-div'>
          <div className='profile-picture-inner-div'>
            <Popup
              on='click'
              open={this.state.isProfilePicturePopupOpen}
              onOpen={this.handleOpen}
              className='change-profile-picture-pop-up'
              style={{
                position: 'fixed',
                minWidth: '100vw',
                minHeight: '100vh',
                top: '0vh',
                left: '0vw',
                transform: 'none',
                marginTop: 0,
                backgroundColor: 'rgba(0,0,0,0.5)'
              }}
              trigger={<img src={profilePicture} alt=' '></img>}
            >
              <ProfilePicturePopUp handleClose={this.handleClose} />
            </Popup>
          </div>
        </div>
        <div className='profile-details-outer-div'>
          <div className='profile-details-div-one'>
            <h2>{username}</h2>
            <Button>Edit Profile</Button>
          </div>
          <div className='profile-details-div-one'>
            <p className='first-p'>
              <span>{numPosts || 0}</span> posts
            </p>
            <p>
              <span>{numFollowers || 0}</span> followers
            </p>
            <p>
              <span>{numFollowing || 0}</span> following
            </p>
          </div>
          <div className='profile-details-div-one'>
            <h2 className='profile-fullname'>{fullname}</h2>
          </div>
        </div>
      </div>
    )
  }
}
export default ProfileHero
