
import React from 'react';
class UserCard extends React.Component {
    render() {
        const { user } = this.props;
        return (<div className='inbox-user-card'>
            <div className='inbox-user-image'><img src={user.image} alt={user.username} /></div>
            <div className='inbox-user-details'>
                <p className='inbox-usercard-name'>{user.username}</p>
                <p className='inbox-usercard-time'>6 Hours Ago</p>
            </div>
        </div>
        );
    }
}
export default UserCard