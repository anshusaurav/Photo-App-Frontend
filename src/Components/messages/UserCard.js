
import React from 'react';
class UserCard extends React.Component {
    render() {
        const { user } = this.props;
        return (<div className='inbox-user-card'>
            <img src={user.image} alt={user.username} />
            <div className='inbox-user-details'>
                <p>{user.username}</p>
                <p>{user.fullname}</p>
            </div>
        </div>
        );
    }
}
export default UserCard