import React from 'react'
import { Menu } from 'semantic-ui-react'
import HeaderNav from './common/HeaderNav'
import EditProfile from './profile/EditProfile'
import EditPassword from './profile/EditPassword'
import Uploads from './profile/Uploads'
import Bookmarks from './profile/Bookmarks'
import UserCard from './messages/UserCard'
class MessagesPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { activeItem: 'Edit Profile', users: [] }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    async saveUsers() {
        const { jwttoken } = localStorage;
        const usernames = ['anshusaurav', 'vivekbro', 'dasjideepak'];
        Promise.all(usernames.map(username => {
            const url = `http://localhost:4000/api/profiles/${username}`;
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Token ${jwttoken}`
            };
            fetch(url, {
                method: 'GET',
                headers: headers
            }).then(data => data.json())
                .then(results => {
                    // console.log(typeof results);
                    this.setState({ users: this.state.users.concat(results.profile) })
                })
        }))
        console.log()
    }
    componentDidMount() {
        this.saveUsers();
    }
    render() {
        const { activeItem, users } = this.state
        const { toggleLoggedIn } = this.props
        return (
            <div className='full-container'>
                <HeaderNav toggleLoggedIn={toggleLoggedIn} />
                <div className='message-user-profile-main container'>
                    <div className='message-user-inner-div'
                        style={{
                            borderRadius: 1
                        }}
                    >
                        <div className='message-user-nav'>
                            <div className='message-user-header'>
                                <p className='message-direct-header'>Direct</p>
                                <div>
                                    <svg aria-label="New Message" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 44 44" width="24"><path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path><path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path><path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path></svg>

                                </div>
                            </div>

                            <Menu fluid vertical pointing secondary>
                                {
                                    users && users.map(elem => {
                                        return <Menu.Item
                                            name={elem.username}
                                            active={activeItem === elem.username}
                                            onClick={this.handleItemClick}>
                                            <UserCard user={elem} />
                                        </Menu.Item>

                                    })
                                }

                            </Menu>
                        </div>

                        <div
                            className='message-main-section'
                        >
                            {activeItem === 'Edit Profile' ? (
                                <EditProfile />
                            ) : activeItem === 'Change Password' ? (
                                <EditPassword />
                            ) : activeItem === 'Uploads' ? (
                                <Uploads />
                            ) : (<Bookmarks />)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MessagesPage;