import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import ProfilePicturePopUp from '../common/ProfilePicturePopUp'
import { SingleImageLoaderMediumRounded } from './../loaders/loaders'
import { Link } from 'react-router-dom'
class ProfileHero extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isProfilePicturePopupOpen: false,
      profile: null,
      isUpdated: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.toggleUpdate = this.toggleUpdate.bind(this)
  }
  handleOpen () {
    this.setState({ isProfilePicturePopupOpen: true })
  }
  handleClose () {
    this.setState({ isProfilePicturePopupOpen: false })
  }
  toggleUpdate () {
    this.setState({ isUpdated: !this.state.isUpdated })
  }
  async saveProfile () {
    const url = 'http://localhost:4000/api/user'
    const { jwttoken } = localStorage
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()

      if (!data.errors) {
        this.setState({ profile: data.user })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  componentDidMount () {
    this.saveProfile()
  }
  componentDidUpdate (prevProps, prevState) {
    if (prevState.isUpdated !== this.state.isUpdated) {
      this.saveProfile()
    }
  }
  render () {
    return (
      <div className='profile-user-inner-div'>
        <div className='profile-picture-outer-div'>
          {this.state.profile && this.state.profile.image ? (
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
                trigger={<img src={this.state.profile.image} alt=' '></img>}
              >
                <ProfilePicturePopUp
                  handleClose={this.handleClose}
                  toggleUpdate={this.toggleUpdate}
                />
              </Popup>
            </div>
          ) : (
            <SingleImageLoaderMediumRounded />
          )}
        </div>
        {this.state.profile ? (
          <div className='profile-details-outer-div'>
            <div className='profile-details-div-one'>
              <h2>{this.state.profile.username}</h2>
              <Link to='/settings'>
                <Button className='edit-profile-btn'>Edit Profile</Button>
              </Link>
            </div>
            <div className='profile-details-div-one'>
              <p className='first-p'>
                <span>{this.state.profile.numPosts || 0}</span> posts
              </p>
              <p>
                <span>{this.state.profile.numFollowers || 0}</span> followers
              </p>
              <p>
                <span>{this.state.profile.numFollowing || 0}</span> following
              </p>
            </div>
            <div className='profile-details-div-one'>
              <h2 className='profile-fullname'>
                {this.state.profile.fullname}
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}
export default ProfileHero
