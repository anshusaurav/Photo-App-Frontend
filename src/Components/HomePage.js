import React from 'react'

import HeaderNav from './common/HeaderNav'
import { Card, Icon, Image, Form, TextArea, Button } from 'semantic-ui-react'
class HomePage extends React.Component {
  render () {
    var arr = [
      'https://images.pexels.com/photos/3088778/pexels-photo-3088778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1628233/pexels-photo-1628233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?cs=srgb&dl=person-pointing-at-black-and-gray-film-camera-near-macbook-1051075.jpg&fm=jpg',
      'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?cs=srgb&dl=camera-iphone-macbook-pro-office-62689.jpg&fm=jpg',
      'https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4681113/pexels-photo-4681113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4681074/pexels-photo-4681074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4614167/pexels-photo-4614167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      'https://images.pexels.com/photos/4614516/pexels-photo-4614516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4593876/pexels-photo-4593876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4623636/pexels-photo-4623636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4710891/pexels-photo-4710891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/4644397/pexels-photo-4644397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/732423/pexels-photo-732423.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/1329308/pexels-photo-1329308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/352096/pexels-photo-352096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3616232/pexels-photo-3616232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3358967/pexels-photo-3358967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3617467/pexels-photo-3617467.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3636074/pexels-photo-3636074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]
    var suggestions = [
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
    return (
      <div className='full-container'>
        <HeaderNav/>
        <div>
          <div className='container'>
            <div className='home-page-div'>
              <div className='feed-images-div'>
                {arr.map(img => {
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
                          <span className='feed-image-author-username'>
                            anshusaurav
                          </span>
                        </div>
                        <span>
                          {' '}
                          <Icon name='ellipsis horizontal' />{' '}
                        </span>
                      </Card.Content>
                      <Image
                        className='feed-image-elem'
                        src={img}
                        wrapped
                        ui={true}
                      />
                      <Card.Content>
                        <Card.Description className='feed-image-inter-content'>
                          <div className='feed-image-action-div'>
                            <span>
                              {' '}
                              <Icon
                                className='action-elem'
                                name='heart outline large'
                              />{' '}
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
                              <Icon
                                className='action-elem'
                                name='send outline large'
                              />{' '}
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
                })}
              </div>
              <div className='feed-suggestions-div'>
                <div className='feed-suggestion-inner-div'>
                  <div className='feed-profile-div'>
                    {/* <Card>
                      <Card.Content>
                        <Image
                          className='feed-profile-picture-img'
                          floated='right'
                          size='mini'
                          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>anshusaurav</Card.Header>
                        <Card.Meta>Anshu Saurabh</Card.Meta>
                      </Card.Content>
                    </Card> */}
                    <div className='feed-profile-inner-div'></div>
                  </div>
                  <div className='feed-sugg-user-div'>
                    <h4>Suggestions for you</h4>
                  </div>
                  <div className='feed-suggestion-profile-div'>
                    {suggestions.map(elem => {
                      return (
                        <div className='feed-suggestion-profile-inner-div'>
                          <div className='feed-sugg-profile-user'>
                            <div className='feed-sugg-profile-img-div'>
                              <img src={elem.image}></img>
                            </div>
                            <p>{elem.name}</p>
                          </div>
                          <div>
                            <Button color='blue'>Follow</Button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
