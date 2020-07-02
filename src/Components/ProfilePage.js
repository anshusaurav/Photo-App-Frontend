import React from 'react'
import HeaderNav from './common/HeaderNav'

import ProfileImages from './profile/ProfileImages'
import ProfileHero from './profile/ProfileHero'
class ProfilePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imagepostList: null,
      profile: null,
      isUpdated: false,
    }
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
      // console.log('USer data', data);
      if (!data.errors) {
        this.setState({ profile: data.user })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  async savePosts () {
    const { jwttoken } = localStorage;
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    // console.log(loggedInUser.username)
    const url = `http://localhost:4000/api/p?author=${loggedInUser.username}`;
    // const { jwttoken } = localStorage
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json();
      // console.log('iamges',data);
      if (!data.errors) {
        this.setState({ imagepostList: data.imageposts })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  componentDidMount(){
    this.saveProfile();
    this.savePosts();
  }
  render () {
    const { toggleLoggedIn } = this.props;
    const { profile, imagepostList } = this.state;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
      
        <div className='profile-user-details container'>
          {profile && <ProfileHero profile={profile}/>}
        </div>
        <div className='container'> <ProfileImages imagepostList={imagepostList}/></div>
      </div>
    )
  }
}

export default ProfilePage
