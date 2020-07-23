import React from "react";
import HeaderNav from "./common/HeaderNav";
import { withRouter } from "react-router-dom";
import UserImages from "./profile/UserImages";
import UserHero from "./profile/UserHero";
class OtherUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { profile: null, isUpdate: false };
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleUpdate() {
    this.setState({ isUpdate: !this.state.isUpdate });
  }
  componentDidMount() {}

  render() {
    const path = this.props.history.location.pathname;
    // console.log(path);
    const usedPath = path.substring(1);
    const index = usedPath.indexOf("/");
    const uName = usedPath.substring(index + 1);
    console.log(uName);
    const { toggleLoggedIn } = this.props;
    return (
      <div className="full-container">
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />

        <div className="profile-user-details container">
          <UserHero username={uName} />
        </div>
        <UserImages username={uName} />
      </div>
    );
  }
}

export default withRouter(OtherUserPage);
