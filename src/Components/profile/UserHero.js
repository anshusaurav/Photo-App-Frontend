import React from "react";
import { Button, Popup, Transition } from "semantic-ui-react";
import ProfilePicturePopUp from "../common/ProfilePicturePopUp";
import { SingleImageLoaderMediumRounded } from "./../loaders/loaders";
import { Link } from "react-router-dom";
class UserHero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfilePicturePopupOpen: false,
      profile: null,
      loggedInUser: null,
      isUpdated: false,
      animationFollow: "pulse",
      durationFollow: 600,
      visibleFollow: true,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleUpdate = this.toggleUpdate.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
  }
  handleOpen() {
    this.setState({ isProfilePicturePopupOpen: true });
  }
  handleClose() {
    this.setState({ isProfilePicturePopupOpen: false });
  }
  toggleUpdate() {
    this.setState({ isUpdated: !this.state.isUpdated });
  }
  async saveProfile() {
    const { username } = this.props;
    const url = `http://localhost:4000/api/profiles/${username}`;
    const { jwttoken } = localStorage;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Token ${jwttoken}`,
        },
      });
      const data = await response.json();
      console.log(data);
      if (!data.errors) {
        this.setState({ profile: data.profile });
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  }
  toggleFollow(event) {
    event.preventDefault();
    this.submitFollowToggle();
  }
  async submitFollowToggle() {
    const slug = this.state.profile.username;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/profiles/${slug}/follow`;
    const isFollowed = this.state.profile.following;
    try {
      let response;
      if (isFollowed) {
        response = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${jwttoken}`,
          },
        });
      } else {
        response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${jwttoken}`,
          },
        });
      }
      let data = await response.json();
      console.log(data);
      if (!data.errors) {
        this.setState({ isUpdated: !this.state.isUpdated });
        this.toggleVisibilityFollow();
      } else {
        const errors = [];
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`);
        }
        this.setState({ errorMsgs: errors });
      }
    } catch (error) {
      console.error("Error:", error);
      const errors = [];
      errors.push(error.toString());
      this.setState({ errorMsgs: errors });
    }
  }
  toggleVisibilityFollow = () =>
    this.setState((prevState) => ({ visibleFollow: !prevState.visibleFollow }));
  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  componentDidMount() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.setState({ loggedInUser });
    this.saveProfile();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.isUpdated !== this.state.isUpdated) {
      this.saveProfile();
    }
  }

  render() {
    const { animationFollow, durationFollow, visibleFollow } = this.state;
    return (
      <div className="profile-user-inner-div">
        <div className="profile-picture-outer-div">
          {this.state.profile && this.state.profile.image ? (
            <div className="profile-picture-inner-div">
              <Popup
                on="click"
                open={this.state.isProfilePicturePopupOpen}
                onOpen={this.handleOpen}
                className="change-profile-picture-pop-up"
                style={{
                  position: "fixed",
                  minWidth: "100vw",
                  minHeight: "100vh",
                  top: "0vh",
                  left: "0vw",
                  transform: "none",
                  marginTop: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                }}
                trigger={<img src={this.state.profile.image} alt=" "></img>}
              >
                <ProfilePicturePopUp
                  handleClose={this.handleClose}
                  toggleUpdate={this.toggleUpdate}
                />
              </Popup>
            </div>
          ) : (
            <SingleImageLoaderMediumRounded />
          )}
        </div>
        {this.state.profile ? (
          <div className="profile-details-outer-div">
            <div className="profile-details-div-one">
              <h2>{this.state.profile.username}</h2>
              {this.state.loggedInUser.username ===
              this.state.profile.username ? (
                <Link to="/settings">
                  <Button className="edit-profile-btn">Edit Profile</Button>
                </Link>
              ) : this.state.profile.following ? (
                <Transition
                  animation={animationFollow}
                  duration={durationFollow}
                  visible={visibleFollow}
                >
                  <Button
                    className="pop-up-unfollow-btn"
                    onClick={this.toggleFollow}
                    color="instagram"
                    style={{ borderRadius: 8 }}
                  >
                    Following
                  </Button>
                </Transition>
              ) : (
                <Transition
                  animation={animationFollow}
                  duration={durationFollow}
                  visible={visibleFollow}
                >
                  <Button
                    className="pop-up-follow-btn"
                    onClick={this.toggleFollow}
                    style={{ borderRadius: 8 }}
                  >
                    Follow
                  </Button>
                </Transition>
              )}
            </div>
            <div className="profile-details-div-one">
              <p className="first-p">
                <span>{this.state.profile.numPosts || 0}</span> posts
              </p>
              <p>
                <span>{this.state.profile.numFollowers || 0}</span> followers
              </p>
              <p>
                <span>{this.state.profile.numFollowing || 0}</span> following
              </p>
            </div>
            <div className="profile-details-div-one">
              <h2 className="profile-fullname">
                {this.state.profile.fullname}
              </h2>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default UserHero;
