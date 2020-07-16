import React, { createRef } from 'react'
import {
  Card,
  Icon,
  Image,
  Form,
  TextArea,
  Button,
  Transition
} from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

class PopUpImageElem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isSubmitable: '',
      body: '',
      comments: [],
      isUpdated: false,
      mainImg: {},
      animation: 'tada',
      duration: 500,
      visible: true,
      animationFollow: 'pulse',
      durationFollow: 600,
      visibleFollow: true,
      bgColor: 'black'
    }
    this.textAreaRef = createRef()
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.toggleLike = this.toggleLike.bind(this)
    this.putFocusOnTextArea = this.putFocusOnTextArea.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
    // this.saveImage = this.saveImage.bind(this);
  }

  toggleFollow (event) {
    event.preventDefault()
    this.submitFollowToggle()
  }
  async submitFollowToggle () {
    const slug = this.state.mainImg.author.username
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/profiles/${slug}/follow`
    const isFollowed = this.state.mainImg.author.following
    try {
      let response
      if (isFollowed) {
        response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`
          }
        })
      } else {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`
          }
        })
      }
      let data = await response.json()
      console.log(data)
      if (!data.errors) {
        this.setState({ isUpdated: !this.state.isUpdated })
        this.toggleVisibilityFollow()
      } else {
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error:', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  toggleVisibilityFollow = () =>
    this.setState(prevState => ({ visibleFollow: !prevState.visibleFollow }))
  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }))

  putFocusOnTextArea (event) {
    console.dir(this.textAreaRef.current)
    this.textAreaRef.current.focus()
  }
  toggleLike (event) {
    event.preventDefault()
    this.submitLikeToggle()
  }
  async submitLikeToggle () {
    const slug = this.props.img
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/p/${slug}/favorite`
    const isLiked = this.state.mainImg.favorited
    try {
      let response
      if (isLiked) {
        response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`
          }
        })
      } else {
        response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${jwttoken}`
          }
        })
      }
      let data = await response.json()
      // console.log(data)
      if (!data.errors) {
        this.setState({ isUpdated: !this.state.isUpdated })
        this.toggleVisibility()
      } else {
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error:', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  changeHandler (event, { name, value }) {
    if (event.target.name === 'body') {
      this.setState({ body: event.target.value }, function () {
        if (this.checkValidComment().result) {
          this.setState({ isSubmitable: true })
        } else {
          this.setState({ isSubmitable: false })
        }
      })
    }
  }
  submitHandler (event) {
    event.preventDefault()
    this.submitComment()
  }
  async submitComment () {
    const slug = this.props.img
    const { body } = this.state
    const { jwttoken } = localStorage
    const comment = { comment: { body } }
    const url = `http://localhost:4000/api/p/${slug}/comments`

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${jwttoken}`
        },
        body: JSON.stringify(comment)
      })
      let data = await response.json()
      if (!data.errors) {
        this.setState({ body: '' })
        this.setState({ isUpdated: !this.state.isUpdated })
      } else {
        const errors = []
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`)
        }
        this.setState({ errorMsgs: errors })
      }
    } catch (error) {
      console.error('Error:', error)
      const errors = []
      errors.push(error.toString())
      this.setState({ errorMsgs: errors })
    }
  }
  checkValidComment () {
    const { body } = this.state
    let res = true,
      data = []
    if (body.trim().length === 0) {
      res = false
      data.push('email')
    }
    if (res) return { result: true, data }

    return { result: false, data }
  }
  async saveComments () {
    const slug = this.props.img
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/p/${slug}/comments`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()
      if (!data.errors) {
        let comments = [...data.comments]
        comments.forEach(comment => {
          TimeAgo.addLocale(en)
          const timeAgo = new TimeAgo('en-US')
          comment.createdAt = timeAgo.format(new Date(comment.createdAt))
        })
        this.setState({ comments })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  async saveImage () {
    const slug = this.props.img;
    const { jwttoken } = localStorage;
    const url = `http://localhost:4000/api/p/${slug}`;
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()
      if (!data.errors && data.imagepost) {
        this.setState({ mainImg: data.imagepost })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  timeAgo (date) {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(date)
  }
  async componentDidMount () {
    this.saveImage()
    this.saveComments()
  }
  async componentDidUpdate (prevProps, prevState) {
    if (this.state.isUpdated !== prevState.isUpdated) {
      this.saveImage()
      this.saveComments()
    }
  }
  componentWillUnmount () {}

  render () {
    const {
      mainImg,
      isSubmitable,
      body,
      comments,
      animation,
      duration,
      visible,
      animationFollow,
      durationFollow,
      visibleFollow
    } = this.state

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

    return (
      <Card
        className='popup-image-card'
        style={{
          backgroundColor: 'transparent',
          minHeight: '100vh',
          borderRadius: '1px',
          position: 'relative'
        }}
      >
        <span className='close-popup-span' onClick={this.props.handleClose}>
          X
        </span>
        <div className='pop-up-container'>
          <div className='pop-up-grid'>
            {mainImg && loggedInUser ? (
              mainImg.isImage === 1 ? (
                <div
                  className='popup-imagevideo-container'
                  style={{ backgroundColor: mainImg.bgColor }}
                >
                  <Image
                    className='popup-image-elem'
                    src={`${mainImg.filename}`}
                  />
                </div>
              ) : (
                <div
                  className='popup-imagevideo-container'
                  style={{ backgroundColor: mainImg.bgColor }}
                >
                  <video
    className='popup-main-video'
    controls
    src={`${mainImg.filename}`}
    type='video/mp4'
    poster='https://imgur.com/IK3qPhT'
    autoPlay={true}
    style={{maxHeight: 660, minHeight: 400, width: '100%'}}
    />
                </div>
              )
            ) : (
              <p>Loading</p>
            )}

            <div className='pop-up-des-div'>
              <Card.Content className='popup-image-author-content'>
                {loggedInUser && mainImg && comments && mainImg.author ? (
                  <div className='popup-image-author-profile'>
                    <Image
                      className='popup-image-author-image'
                      src={mainImg.author.image}
                      size='mini'
                      circular
                    />
                    <span className='popup-image-author-username'>
                      {mainImg.author.username}
                    </span>
                    <span>
                      {mainImg.author.usernmae !== loggedInUser.username && (
                        <>
                          {mainImg.author.following ? (
                            <Transition
                              animation={animationFollow}
                              duration={durationFollow}
                              visible={visibleFollow}
                            >
                              <Button
                                className='pop-up-unfollow-btn'
                                onClick={this.toggleFollow}
                                color='instagram'
                                style={{ borderRadius: 8 }}
                              >
                                Following
                              </Button>
                            </Transition>
                          ) : mainImg.author.username !==
                            loggedInUser.username ? (
                            <Transition
                              animation={animationFollow}
                              duration={durationFollow}
                              visible={visibleFollow}
                            >
                              <Button
                                className='pop-up-follow-btn'
                                onClick={this.toggleFollow}
                                style={{ borderRadius: 8 }}
                              >
                                Follow
                              </Button>
                            </Transition>
                          ) : null}
                        </>
                      )}
                    </span>
                  </div>
                ) : (
                  <p>Loading</p>
                )}
                <span>
                  {' '}
                  <Icon name='ellipsis horizontal' />{' '}
                </span>
              </Card.Content>
              <Card.Content>
                {loggedInUser && comments && mainImg && mainImg.author ? (
                  <div className='pop-up-image-comment-complete-div'>
                    <Card.Description className='popup-common-des  popup-comment-elem-single'>
                      <Image
    size='mini'
    className='popup-comment-comment-user-img'
    src={mainImg.author.image}
    />
                      <strong>{mainImg.author.username} </strong>
                      {mainImg.description}
                    </Card.Description>
                    {comments &&
                      comments.map((comment, index) => {
                        return (
                          <Card.Description
                            key={index}
                            className='popup-common-des popup-comment-elem-single'
                          >
                            <Image
    size='mini'
    className='popup-comment-comment-user-img'
    src={comment.author.image}
    />
                            <strong>{comment.author.username}</strong>
                            {comment.body}
                          </Card.Description>
                        )
                      })}

                    <Card.Meta className='popup-common-des popup-more-comment-anchor'>
                      {mainImg.commentsCount !== 0
                        ? `View All ${mainImg.commentsCount} ${
                            mainImg.commentsCount !== 1 ? 'comments' : 'comment'
                          }`
                        : `Be the first one to respond`}
                    </Card.Meta>
                  </div>
                ) : (
                  <p>Loading</p>
                )}
                {comments && mainImg ? (
                  <div className='pop-up-image-action-complete-div'>
                    <Card.Description className='popup-image-inter-content'>
                      <div className='popup-image-action-div'>
                        <span>
                          <Transition
                            animation={animation}
                            duration={duration}
                            visible={visible}
                          >
                            <Icon
                              className='popup-action-elem'
                              name={
                                mainImg.favorited ? 'heart' : 'heart outline'
                              }
                              color={mainImg.favorited ? 'red' : 'black'}
                              size='large'
                              onClick={this.toggleLike}
                            />
                          </Transition>
                        </span>
                        <span>
                          {' '}
                          <Icon
                            className='popup-action-elem'
                            name='comment outline'
                            size='large'
                            onClick={this.putFocusOnTextArea}
                          />{' '}
                        </span>
                        <span>
                          {' '}
                          <Icon
                            className='popup-action-elem'
                            name='send'
                            size='large'
                          />{' '}
                        </span>
                      </div>

                      <div>
                        <span>
                          {' '}
                          <Icon
                            className='popup-action-elem'
                            name='bookmark outline'
                            size='large'
                          />{' '}
                        </span>
                      </div>
                    </Card.Description>
                    <Card.Description className='popup-common-des'>
                      {' '}
                      <p className='popup-image-like-count'>
                        {mainImg.favoritesCount !== 0
                          ? `${mainImg.favoritesCount} ${
                              mainImg.favoritesCount !== 1 ? 'likes' : 'like'
                            }`
                          : `Be the first one to like`}
                      </p>
                    </Card.Description>
                    <Card.Description className='popup-image-elem-date popup-common-des'>
                      {this.timeAgo(new Date(mainImg.createdAt))}
                    </Card.Description>
                  </div>
                ) : (
                  <p>Loading</p>
                )}
              </Card.Content>
              <div className='popup-comment-form-outer-div'>
                <Form
                  className='popup-add-comment-form'
                  onSubmit={this.submitHandler}
                >
                  <TextArea
    rows={1}
    className='popup-add-comment-input-text'
    placeholder='Add a comment...'
    name='body'
    onChange={this.changeHandler}
    value={body}
    style={{
      border: 0,
      overflow: 'hidden',
      width: '100%',
      resize: 'none'
    }}
    ref={this.textAreaRef}
    />

                  <Button
                    className='popup-elem-add-comment-btn'
                    disabled={!isSubmitable}
                    style={{ background: 'none', color: '#0095f6' }}
                    onClick={this.submitHandler}
                  >
                    POST
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }
}
export default PopUpImageElem
