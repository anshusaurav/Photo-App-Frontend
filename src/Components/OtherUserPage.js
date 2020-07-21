import React from 'react'
import HeaderNav from './common/HeaderNav'
import {withRouter} from 'react-router-dom';
import UserImages from './profile/UserImages'
import UserHero from './profile/UserHero'
class OtherUserPage extends React.Component {
  constructor(props){
      super(props);
      this.state = {profile: null, isUpdate: false}
      this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate(){
      this.setState({isUpdate: !this.state.isUpdate})
  }
  
  
  render () {
    const { toggleLoggedIn } = this.props;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
      
        <div className='profile-user-details container'>
          <UserHero/>
        </div>
        <UserImages/>
      </div>
    )
  }
}

export default withRouter(OtherUserPage)
