import React from 'react'
import HeaderNav from './common/HeaderNav'

import ProfileImages from './profile/ProfileImages'
import ProfileHero from './profile/ProfileHero'
class ProfilePage extends React.Component {
  
  
  
  
  render () {
    const { toggleLoggedIn } = this.props;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
      
        <div className='profile-user-details container'>
          <ProfileHero/>
        </div>
        <ProfileImages/>
      </div>
    )
  }
}

export default ProfilePage
