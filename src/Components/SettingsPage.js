import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import HeaderNav from './common/HeaderNav'
export default class SettingsPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { activeItem: 'Edit Profile' }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state
    const { toggleLoggedIn } = this.props
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div className='settings-user-profile-main container'>
          <Grid
            style={{
              paddingTop: 16,
              paddingBottom: 16,
              border: '1px solid #D4D4D5',
              borderRadius: 1
            }}
          >
            <Grid.Column width={3} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Menu fluid vertical tabular style={{ minHeight: '85vh' }}>
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
              </Menu>
            </Grid.Column>

            <Grid.Column
              stretched
              className='settings-main-section'
              style={{ width: '80%' }}
            >
              {activeItem === 'Edit Profile' ? (
                <Segment style={{ border: 'none', minHeight: '85vh' }}>
                  Edit Profile
                </Segment>
              ) : activeItem === 'Change Password' ? (
                <Segment>Change Password</Segment>
              ) : (
                <Segment>Uploads</Segment>
              )}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}
