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
    const img = this.props.img
    return (
      <Card className='popup-image-card'>
        <div className='pop-up-container' >
        <div className='pop-up-grid'>
          <Image className='popup-image-elem' src={img} wrapped ui={true} />
          <div>
            <Card.Content className='popup-image-author-content'>
              <div className='popup-image-author-profile'>
                <Image
                  className='popup-image-author-image'
                  src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                  size='mini'
                  circular
                />
                <span className='popup-image-author-username'>anshusaurav</span>
              </div>
              <span>
                {' '}
                <Icon name='ellipsis horizontal' />{' '}
              </span>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                {' '}
                <p className='popup-image-like-count'>1,022 likes</p>
              </Card.Description>
              <Card.Meta>View All 106 comments</Card.Meta>
              <Card.Description>
                <strong>anshusaurav </strong>
                Why everyone linking this pic..??
              </Card.Description>
              <Card.Description>
                <strong>Sunny </strong>
                Bela paisagem! !! Vamos segui? SDV!
              </Card.Description>
              <Card.Description>
                <strong>Leone </strong>
                is a comedian living in Nashville.
              </Card.Description>

              <Card.Description className='popup-image-elem-date'>
                2 days ago
              </Card.Description>
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
