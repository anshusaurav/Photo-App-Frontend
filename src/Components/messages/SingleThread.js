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
    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.user !== this.props.user) {
        }
    }
    compoen
    render() {
        const { user } = this.props;
        return <>
            <p className='inbox-usercard-name'>{user}</p>
            <p className='inbox-usercard-time'>6 Hours Ago</p>
        </>
    }
}
export default SingleThread;