import React from 'react'
import { Menu } from 'semantic-ui-react'
import HeaderNav from './common/HeaderNav'
import EditProfile from './profile/EditProfile'
import EditPassword from './profile/EditPassword'
import Uploads from './profile/Uploads'
import Bookmarks from './profile/Bookmarks'
export default class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeItem: 'Edit Profile' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { toggleLoggedIn } = this.props
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div className='settings-user-profile-main container'>
          <div className='settings-user-inner-div'
            style={{
              borderRadius: 1
            }}
          >
            <div className='settings-user-nav'>
              <Menu fluid vertical pointing secondary>
                <Menu.Item
                  name='Edit Profile'
                  active={activeItem === 'Edit Profile'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Change Password'
                  active={activeItem === 'Change Password'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Uploads'
                  active={activeItem === 'Uploads'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='Bookmarks'
                  active={activeItem === 'Bookmarks'}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </div>

            <div
              className='settings-main-section'
            >
              {activeItem === 'Edit Profile' ? (
                <EditProfile />
              ) : activeItem === 'Change Password' ? (
                <EditPassword />
              ) : activeItem === 'Uploads' ? (
                <Uploads />
              ) : activeItem === 'Bookmarks' ?
                      (<Bookmarks />) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
