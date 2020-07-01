import React from 'react'
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react'

class PopUpImageElem extends React.Component {
  render () {
    var comments = [
      {
        image: 'https://react.semantic-ui.com/images/avatar/small/veronika.jpg',
        name: 'veronicsossi'
      },
      {
        image: 'https://react.semantic-ui.com/images/avatar/small/lindsay.png',
        name: 'lindsay'
      },
      {
        image: 'https://react.semantic-ui.com/images/avatar/small/matthew.png',
        name: 'methhew'
      },
      {
        image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
        name: 'jennihess'
      },
      {
        image: 'https://react.semantic-ui.com/images/avatar/small/rachel.png',
        name: 'rachael'
      }
    ]
    const {commentsCount, favoritesCount, filename, author, createdAt, description} = this.props.img;
    const {username, fullname, image, following} = author;
    return (
      
//       author: {username: "anshusaurav", fullname: "anshu saurabh", image: "https://static.productionready.io/images/smiley-cyrus.jpg", following: false}
// commentsCount: 0
// createdAt: "2020-07-01T13:01:35.232Z"
// description: "Grass Fields"
// favorited: false
// favoritesCount: 0
// filename: "46165cc9-095e-43d3-87f7-9138e48fdf4a_blob"
// location: "Dharamshala"
// slug: "46165cc9-095e-43d3-87f7-9138e48fdf4a_blob-1fwvqd"
// tagList: ["["Mountains","Serenity"]"]
// updatedAt: "2020-07-01T13:01:35.232Z"
      <Card
        className='popup-image-card'
        style={{
          backgroundColor: 'transparent',
          minHeight: '100vh',
          borderRadius: '1px',
          position:'relative'
        }}
      >
      <span class='close-popup-span'>X</span>
        <div className='pop-up-container'>
        
          <div className='pop-up-grid'>
            <Image className='popup-image-elem' src={`http://localhost:4000/${filename}`} wrapped ui={true} />
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
                <Card.Description className='popup-common-des popup-comment-elem-single'>
                  <Image
                    size='mini'
                    className='popup-comment-comment-user-img'
                    src='https://react.semantic-ui.com/images/avatar/small/matthew.png'
                  ></Image>
                  <strong>Sunny </strong>
                  Bela paisagem! !! Vamos segui? SDV!
                </Card.Description>
                <Card.Description className='popup-common-des popup-comment-elem-single '>
                  <Image
                    size='mini'
                    className='popup-comment-comment-user-img'
                    src='https://react.semantic-ui.com/images/avatar/small/lindsay.png'
                  ></Image>
                  <strong>Leone </strong>
                  is a comedian living in Nashville.
                </Card.Description>
                <Card.Meta className='popup-common-des popup-more-comment-anchor'>
                  View All {commentsCount} comments
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
                  <p className='popup-image-like-count'>{favoritesCount} likes</p>
                </Card.Description>
                <Card.Description className='popup-image-elem-date popup-common-des'>
                  {createdAt}
                </Card.Description>
              </Card.Content>
              <div className='popup-comment-form-outer-div'>
                <Form className='popup-add-comment-form'>
                  <TextArea
                    rows={1}
                    class='popup-add-comment-input-text'
                    placeholder='Add a comment...'
                    style={{
                      border: 0,
                      overflow: 'hidden',
                      width: '100%',
                      resize: 'none'
                    }}
                  />

                  <Button
                    class='popup-elem-add-comment-btn'
                    // disabled={true}
                    style={{ background: 'none', color: '#0095f6' }}
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
