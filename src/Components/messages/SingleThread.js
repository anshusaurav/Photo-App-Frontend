import React from 'react'
class SingleThread extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: [],
            numMessage: 0,
            userProfile: null
        }
    }
    saveProfile() {

    }
    saveMessage() {

    }
    componentDidMount() {
        this.saveProfile();
        this.saveMessage();
    }
    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.user !== this.props.user) {
        }
    }
    compoen
    render() {
        const { user } = this.props;
        return <div className='thread-main-div'>
            <div className='thread-main-header'>
                <div className='thread-header-inner-div'>
                    <div className='thread-head-user-div'>

                    </div>
                    <div>
                        <button><svg aria-label="View Thread Details" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6"></circle><path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path></svg></button>
                    </div>
                </div>

            </div>
            <p className='inbox-usercard-name'>{user}</p>
            <p className='inbox-usercard-time'>6 Hours Ago</p>
        </div>
    }
}
export default SingleThread;