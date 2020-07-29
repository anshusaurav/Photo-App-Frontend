import React, { createRef } from "react";
import {
  Card,
  Icon,
  Image,
  Form,
  TextArea,
  Button,
  Transition,
} from "semantic-ui-react";
import { FeedHeaderLoader } from "./../loaders/loaders";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ProgressiveImage from "react-progressive-image";
import "./../../../node_modules/video-react/dist/video-react.css";
import { Link } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";
class FeedImageElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitable: "",
      body: "",
      comments: null,
      isUpdated: false,
      img: null,
      animation: "tada",
      duration: 500,
      visible: true,
      animationSave: "pulse",
      visibleSave: true,
    };
    this.textAreaRef = createRef();
    this.videoRef = createRef();
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.toggleLike = this.toggleLike.bind(this);
    this.toggleSave = this.toggleSave.bind(this);
    this.putFocusOnTextArea = this.putFocusOnTextArea.bind(this);

  }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }));

  toggleVisibilitySave = () =>
    this.setState((prevState) => ({ visibleSave: !prevState.visibleSave }))
  putFocusOnTextArea(event) {
    console.dir(this.textAreaRef.current);
    this.textAreaRef.current.focus();
  }
  toggleLike(event) {
    event.preventDefault();
    this.submitLikeToggle();
  }
  async submitLikeToggle() {
    const slug = this.props.img;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/p/${slug}/favorite`;
    const isLiked = this.state.img.favorited;
    try {
      let response;
      if (isLiked) {
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
      // console.log(data)
      if (!data.errors) {
        this.setState({ isUpdated: !this.state.isUpdated });
        this.toggleVisibility();
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
  toggleSave(event) {
    event.preventDefault();
    this.submitSaveToggle();
  }
  async submitSaveToggle() {
    const slug = this.props.img;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/p/${slug}/save`;
    const isLiked = this.state.img.saved;
    try {
      let response;
      if (isLiked) {
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
      // console.log(data)
      if (!data.errors) {
        this.setState({ isUpdated: !this.state.isUpdated });
        this.toggleVisibilitySave();
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
  changeHandler(event, { name, value }) {
    if (event.target.name === "body") {
      this.setState({ body: event.target.value }, function () {
        if (this.checkValidComment().result) {
          this.setState({ isSubmitable: true });
        } else {
          this.setState({ isSubmitable: false });
        }
      });
    }
  }
  submitHandler(event) {
    event.preventDefault();
    this.submitComment();
  }
  async submitComment() {
    const slug = this.props.img;
    const { body } = this.state;
    const { jwttoken } = localStorage;
    const comment = { comment: { body } };
    const url = `http://localhost:4000/api/p/${slug}/comments`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${jwttoken}`,
        },
        body: JSON.stringify(comment),
      });
      let data = await response.json();
      if (!data.errors) {
        this.setState({ body: "" });
        this.setState({ isUpdated: !this.state.isUpdated });
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
  checkValidComment() {
    const { body } = this.state;
    let res = true,
      data = [];
    if (body.trim().length === 0) {
      res = false;
      data.push("email");
    }
    if (res) return { result: true, data };

    return { result: false, data };
  }
  async saveComments() {
    const slug = this.props.img;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/p/${slug}/comments`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Token ${jwttoken}`,
        },
      });
      const data = await response.json();
      if (!data.errors) {
        this.setState({ comments: data.comments }, () => {
          let comments = [...this.state.comments];
          comments.forEach((comment) => {
            TimeAgo.addLocale(en);
            const timeAgo = new TimeAgo("en-US");
            comment.createdAt = timeAgo.format(new Date(comment.createdAt));
          });
          this.setState({ comments });
        });
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  }
  async saveImage() {
    const slug = this.props.img;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/p/${slug}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Token ${jwttoken}`,
        },
      });
      const data = await response.json();
      // console.log('image', data)
      if (!data.errors) {
        this.setState({ img: data.imagepost });
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  }

  componentDidMount() {
    this.saveImage();
    this.saveComments();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isUpdated !== prevState.isUpdated) {
      this.saveComments();
      this.saveImage();
    }
  }
  timeAgo(date) {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo("en-US");
    return timeAgo.format(date);
  }
  render() {
    const { isSubmitable, comments, animation, duration, visible, animationSave, visibleSave } = this.state;
    console.log(this.state.img);
    return (
      <Card className="feed-image-card">
        {this.state.img && this.state.comments ? (
          <>
            <Card.Content className="feed-image-author-content">
              <Link to={`/${this.state.img.author.username}`}>
                <div className="feed-image-author-profile">
                  <Image
                    className="feed-image-author-image"
                    src={this.state.img.author.image}
                    size="mini"
                    circular
                  />
                  <div>
                    <p className="feed-image-author-username">
                      {this.state.img.author.username}
                    </p>
                    <p className="feed-image-author-location">
                      {this.state.img.location || ''}
                    </p>
                  </div>
                </div>
              </Link>
              <span>
                {" "}
                <Icon name="ellipsis horizontal" />{" "}
              </span>
            </Card.Content>
            {this.state.img.isImage === 1 ? (
              <div
                className="feed-imagevideo-container"
                style={{ backgroundColor: this.state.img.bgColor }}
              >
                <ProgressiveImage
                  src={`${this.state.img.filename}`}
                  placeholder={`${this.state.img.filenamesPL[0]}`}
                >
                  {(src, loading) => (
                    <Image
                      className="feed-image-elem"
                      style={{ opacity: loading ? 0.5 : 1 }}
                      src={src}
                      wrapped
                      ui={true}
                      alt="an image"
                    />
                  )}
                </ProgressiveImage>
              </div>
            ) : (
                <div
                  className="feed-imagevideo-container"
                  style={{
                    backgroundColor: this.state.img.bgColor,
                  }}
                  onClick={this.togglePlayVideo}
                >
                  <Player
                    playsInline
                    // poster={this.state.img.filenamesPL[0]}
                    src={`${this.state.img.filename}`}
                    fluid={true}
                  >
                    <BigPlayButton position="center" />
                  </Player>
                </div>
              )}

            <Card.Content>
              <Card.Description className="feed-image-inter-content">
                <div className="feed-image-action-div">
                  <span>
                    <Transition
                      animation={animation}
                      duration={duration}
                      visible={visible}
                    >
                      <Icon
                        className="action-elem"
                        name={
                          this.state.img.favorited ? "heart" : "heart outline"
                        }
                        size="large"
                        color={this.state.img.favorited ? "red" : "black"}
                        onClick={this.toggleLike}
                      />
                    </Transition>
                  </span>
                  <span>
                    {" "}
                    <Icon
                      className="action-elem"
                      name="comment outline"
                      size="large"
                      onClick={this.putFocusOnTextArea}
                    />
                  </span>
                  <span>
                    {" "}
                    <Icon
                      className="action-elem"
                      name="send"
                      size="large"
                    />{" "}
                  </span>
                </div>

                <div>
                  <span>
                    <Transition
                      animation={animationSave}
                      duration={duration}
                      visible={visibleSave}
                    >
                      <Icon
                        className="action-elem"
                        name={
                          this.state.img.saved ? "remove bookmark" : "bookmark outline"
                        }
                        size="large"
                        onClick={this.toggleSave}
                      />
                    </Transition>

                  </span>
                </div>
              </Card.Description>
              <Card.Description>
                {" "}
                <p className="feed-image-like-count">
                  {this.state.img.favoritesCount !== 0
                    ? `${this.state.img.favoritesCount} ${
                    this.state.img.favoritesCount !== 1 ? "likes" : "like"
                    }`
                    : `Be the first one to like`}
                </p>
              </Card.Description>
              <Card.Meta>
                {this.state.img.commentsCount !== 0
                  ? `View All ${this.state.img.commentsCount} ${
                  this.state.img.commentsCount !== 1
                    ? "comments"
                    : "comment"
                  }`
                  : `Be the first one to respond`}
              </Card.Meta>
              <Card.Description>
                <Link to={`/${this.state.img.author.username}`}>
                  <strong style={{ color: "rgba(0,0,0,0.85" }}>
                    {this.state.img.author.username}{" "}
                  </strong>
                </Link>
                {this.state.img.description}
              </Card.Description>

              {comments &&
                comments.map((comment, index) => {
                  return (
                    <Card.Description key={index}>
                      <Link to={`/${comment.author.username}`}>
                        <strong
                          style={{ fontSize: 14, color: "rgba(0,0,0,0.68)" }}
                        >
                          {comment.author.username}{" "}
                        </strong>
                      </Link>
                      {comment.body}
                    </Card.Description>
                  );
                })}
              <Card.Description className="feed-image-elem-date">
                {this.timeAgo(new Date(this.state.img.createdAt))}
              </Card.Description>
            </Card.Content>
            <div className="comment-form-outer-div">
              <Form className="add-comment-form" onSubmit={this.submitHandler}>
                <TextArea
                  rows={1}
                  name="body"
                  onChange={this.changeHandler}
                  value={this.state.body}
                  className="add-comment-input-text"
                  placeholder="Add a comment..."
                  style={{
                    border: 0,
                    overflow: "hidden",
                    width: "100%",
                    resize: "none",
                  }}
                  ref={this.textAreaRef}
                />

                <Button
                  className="feed-elem-add-comment-btn"
                  disabled={!isSubmitable}
                  style={{ background: "none", color: "#0095f6" }}
                  onClick={this.submitHandler}
                >
                  POST
                </Button>
              </Form>
            </div>
          </>
        ) : (
            <FeedHeaderLoader className="feed-loader-full-single" />
          )}
      </Card>
    );
  }
}
export default FeedImageElem;
