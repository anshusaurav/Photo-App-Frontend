import React from 'react'
class SingleThread extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        const { user } = this.props;
        return <><p className='inbox-usercard-name'>{user.username}</p>
            <p className='inbox-usercard-time'>6 Hours Ago</p>
        </>
    }
}
export default SingleThread;