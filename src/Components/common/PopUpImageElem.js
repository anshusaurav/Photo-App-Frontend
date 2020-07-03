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
      comments: null,
      isUpdated: false,
      img: null,
      animation: 'tada',
      duration: 500,
      visible: true
    }
    this.textAreaRef = createRef()
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
    this.toggleLike = this.toggleLike.bind(this)
    this.putFocusOnTextArea = this.putFocusOnTextArea.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  toggleFollow (event) {
    event.preventDefault()
    this.submitFollowToggle()
  }
  async submitFollowToggle () {
    const slug = this.state.img.author.username
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/profiles/${slug}/follow`
    const isFollowed = this.state.img.author.following
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
    const isLiked = this.state.img.favorited
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
        this.setState({ comments: data.comments }, () => {
          let comments = [...this.state.comments]
          comments.forEach(comment => {
            TimeAgo.addLocale(en)
            const timeAgo = new TimeAgo('en-US')
            comment.createdAt = timeAgo.format(new Date(comment.createdAt))
          })
          this.setState({ comments })
        })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  async saveImage () {
    const slug = this.props.img
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/p/${slug}`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()
      console.log('image', data)
      if (!data.errors) {
        this.setState({ img: data.imagepost })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }

  componentDidMount () {
    this.saveImage()
    this.saveComments()
  }
  componentDidUpdate (prevProps, prevState) {
    if (this.state.isUpdated !== prevState.isUpdated) {
      this.saveComments()
      this.saveImage()
    }
  }
  timeAgo (date) {
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(date)
  }
  render () {
    const {
      isSubmitable,
      body,
      comments,
      animation,
      duration,
      visible
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
        <span class='close-popup-span' onClick={this.props.handleClose}>
          X
        </span>
        <div className='pop-up-container'>
          <div className='pop-up-grid'>
            {this.state.img ? (
              <Image
                className='popup-image-elem'
                src={`http://localhost:4000/${this.state.img.filename}`}
                ui={true}
              />
            ) : (
              <p>Loading</p>
            )}
            {this.state.img && this.state.comments ? (
              <div className='pop-up-des-div'>
                <Card.Content className='popup-image-author-content'>
                  <div className='popup-image-author-profile'>
                    <Image
                      className='popup-image-author-image'
                      src={this.state.img.author.image}
                      size='mini'
                      circular
                    />
                    <span className='popup-image-author-username'>
                      {this.state.img.author.username}
                    </span>
                    <span>
                      {this.state.img.author.following ? (
                        <Button
                          className='pop-up-unfollow-btn'
                          onClick={this.toggleFollow}
                        >
                          Following
                        </Button>
                      ) : this.state.img.author.username !==
                        loggedInUser.username ? (
                        <Button
                          className='pop-up-follow-btn'
                          onClick={this.toggleFollow}
                        >
                          Follow
                        </Button>
                      ) : null}
                    </span>
                  </div>
                  <span>
                    {' '}
                    <Icon name='ellipsis horizontal' />{' '}
                  </span>
                </Card.Content>
                <Card.Content>
                <div className='pop-up-image-comment-complete-div'>
                  <Card.Description className='popup-common-des  popup-comment-elem-single'>
                    <Image
                      size='mini'
                      className='popup-comment-comment-user-img'
                      src={this.state.img.author.image}
                    ></Image>
                    <strong>{this.state.img.author.username} </strong>
                    {this.state.img.description}
                  </Card.Description>
                  {comments &&
                    comments.map(comment => {
                      return (
                        <Card.Description className='popup-common-des popup-comment-elem-single'>
                          <Image
                            size='mini'
                            className='popup-comment-comment-user-img'
                            src={comment.author.image}
                          ></Image>
                          <strong>{comment.author.username}</strong>
                          {comment.body}
                        </Card.Description>
                      )
                    })}
                  
                  <Card.Meta className='popup-common-des popup-more-comment-anchor'>
                    {this.state.img.commentsCount !== 0
                      ? `View All ${this.state.img.commentsCount} ${
                          this.state.img.commentsCount !== 1
                            ? 'comments'
                            : 'comment'
                        }`
                      : `Be the first one to respond`}
                  </Card.Meta>
                  </div>
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
                              this.state.img.favorited
                                ? 'heart large red'
                                : 'heart outline large'
                            }
                            onClick={this.toggleLike}
                          />
                        </Transition>
                      </span>
                      <span>
                        {' '}
                        <Icon
                          className='popup-action-elem'
                          name='comment outline large'
                          onClick={this.putFocusOnTextArea}
                        />{' '}
                      </span>
                      <span>
                        {' '}
                        <Icon
                          className='popup-action-elem'
                          name='send outline large'
                        />{' '}
                      </span>
                    </div>

                    <div>
                      <span>
                        {' '}
                        <Icon
                          className='popup-action-elem'
                          name='bookmark outline large'
                        />{' '}
                      </span>
                    </div>
                  </Card.Description>
                  <Card.Description className='popup-common-des'>
                    {' '}
                    <p className='popup-image-like-count'>
                      {this.state.img.favoritesCount !== 0
                        ? `${this.state.img.favoritesCount} ${
                            this.state.img.favoritesCount !== 1
                              ? 'likes'
                              : 'like'
                          }`
                        : `Be the first one to like`}
                    </p>
                  </Card.Description>
                  <Card.Description className='popup-image-elem-date popup-common-des'>
                    {this.timeAgo(new Date(this.state.img.createdAt))}
                  </Card.Description>
                </Card.Content>
                <div className='popup-comment-form-outer-div'>
                  <Form
                    className='popup-add-comment-form'
                    onSubmit={this.submitHandler}
                  >
                    <TextArea
                      rows={1}
                      class='popup-add-comment-input-text'
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
                    ></TextArea>

                    <Button
                      class='popup-elem-add-comment-btn'
                      disabled={!isSubmitable}
                      style={{ background: 'none', color: '#0095f6' }}
                      onClick={this.submitHandler}
                    >
                      POST
                    </Button>
                  </Form>
                </div>
              </div>
            ) : (
              <p>Loading</p>
            )}
          </div>
        </div>
      </Card>
    )
  }
}
export default PopUpImageElem
