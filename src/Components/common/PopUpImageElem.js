import React from 'react'
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
class PopUpImageElem extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isSubmitable: '', body: '', comments: null }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)

    // Add locale-specific relative date/time formatting rules.
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
    const { slug } = this.props.img
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
        // console.log('Posted successfully')
        this.setState({ body: '' })
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
    const { slug } = this.props.img
    const { jwttoken } = localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    // console.log(loggedInUser.username)
    const url = `http://localhost:4000/api/p/${slug}/comments`
    // const { jwttoken } = localStorage
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json()
      console.log('comments', data)
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
  componentDidMount () {
    this.saveComments()
  }
  render () {
    
    let {
      commentsCount,
      favoritesCount,
      filename,
      author,
      createdAt,
      description
    } = this.props.img
    //{new Date(updatedAt).toDateString()}
    TimeAgo.addLocale(en)
    const timeAgo = new TimeAgo('en-US')
    createdAt = timeAgo.format(new Date(createdAt))

    const { username, fullname, image, following } = author
    const { isSubmitable, body, comments } = this.state
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
        <span class='close-popup-span'>X</span>
        <div className='pop-up-container'>
          <div className='pop-up-grid'>
            <Image
              className='popup-image-elem'
              src={`http://localhost:4000/${filename}`}
              wrapped
              ui={true}
            />
            <div className='pop-up-des-div'>
              <Card.Content className='popup-image-author-content'>
                <div className='popup-image-author-profile'>
                  <Image
                    className='popup-image-author-image'
                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                    size='mini'
                    circular
                  />
                  <span className='popup-image-author-username'>
                    {username}
                  </span>
                </div>
                <span>
                  {' '}
                  <Icon name='ellipsis horizontal' />{' '}
                </span>
              </Card.Content>
              <Card.Content>
                <Card.Description className='popup-common-des  popup-comment-elem-single'>
                  <Image
                    size='mini'
                    className='popup-comment-comment-user-img'
                    src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
                  ></Image>
                  <strong>{username} </strong>
                  {description}
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
                  {commentsCount!==0?`View All ${commentsCount} comments`:`Be the first one to respond`}
                </Card.Meta>
                <Card.Description className='popup-image-inter-content'>
                  <div className='popup-image-action-div'>
                    <span>
                      {' '}
                      <Icon
                        className='popup-action-elem'
                        name='heart outline large'
                      />{' '}
                    </span>
                    <span>
                      {' '}
                      <Icon
                        className='popup-action-elem'
                        name='comment outline large'
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
                  {favoritesCount!==0?`${favoritesCount} likes`:`Be the first one to like`}
                    
                  </p>
                </Card.Description>
                <Card.Description className='popup-image-elem-date popup-common-des'>
                  {createdAt}
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
          </div>
        </div>
      </Card>
    )
  }
}
export default PopUpImageElem
