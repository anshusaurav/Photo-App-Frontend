import React from 'react'
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react'

class FeedImageElem extends React.Component {
  
  render () {
      const img = this.props.img;
    return (
      <Card className='feed-image-card'>
        <Card.Content className='feed-image-author-content'>
          <div className='feed-image-author-profile'>
            <Image
              className='feed-image-author-image'
              src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
              size='mini'
              circular
            />
            <span className='feed-image-author-username'>anshusaurav</span>
          </div>
          <span>
            {' '}
            <Icon name='ellipsis horizontal' />{' '}
          </span>
        </Card.Content>
        <Image className='feed-image-elem' src={img} wrapped ui={true} />
        <Card.Content>
          <Card.Description className='feed-image-inter-content'>
            <div className='feed-image-action-div'>
              <span>
                {' '}
                <Icon className='action-elem' name='heart outline large' />{' '}
              </span>
              <span>
                {' '}
                <Icon
                  className='action-elem'
                  name='comment outline large'
                />{' '}
              </span>
              <span>
                {' '}
                <Icon className='action-elem' name='send outline large' />{' '}
              </span>
            </div>

            <div>
              <span>
                {' '}
                <Icon
                  className='action-elem'
                  name='bookmark outline large'
                />{' '}
              </span>
            </div>
          </Card.Description>
          <Card.Description>
            {' '}
            <p className='feed-image-like-count'>1,022 likes</p>
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

          <Card.Description className='feed-image-elem-date'>
            2 days ago
          </Card.Description>
        </Card.Content>
        <div className='comment-form-outer-div'>
          <Form className='add-comment-form'>
            <TextArea
              rows={1}
              class='add-comment-input-text'
              placeholder='Add a comment...'
              style={{
                border: 0,
                overflow: 'hidden',
                width: '100%',
                resize: 'none'
              }}
            />

            <Button
              class='feed-elem-add-comment-btn'
              // disabled={true}
              style={{ background: 'none', color: '#0095f6' }}
            >
              POST
            </Button>
          </Form>
        </div>
      </Card>
    )
  }
}
export default FeedImageElem;