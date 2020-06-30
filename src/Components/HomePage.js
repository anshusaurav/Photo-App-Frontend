import React from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import { Card, Icon, Image, Form, Input, Button } from 'semantic-ui-react'

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
    return (
      <div className='full-container'>
        <div className='header-nav'>
          <div className='header-inner-div'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
            <div fallbackElement='[object Object]' class='ui search'>
              <div className='ui icon input'>
                <input
                  type='text'
                  value=''
                  tabindex='0'
                  className='prompt'
                  autocomplete='off'
                />
                <i aria-hidden='true' class='search icon'></i>
              </div>
              <div className='results transition'>
                <div className='message empty'>
                  <div className='header'>No results found.</div>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <i aria-hidden='true' className='home large icon'></i>
              </li>
              <li>
                <i
                  aria-hidden='true'
                  className='compass outline large icon'
                ></i>
              </li>
              <li>
                <i aria-hidden='true' className='camera retro large icon'></i>
              </li>
              <li>
                <i
                  aria-hidden='true'
                  className='user circle outline large icon'
                ></i>
              </li>
            </ul>
          </div>
        </div>
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
                              <Icon className='action-elem' name='heart outline large' />{' '}
                            </span>
                            <span>
                              {' '}
                              <Icon className='action-elem' name='comment outline large' />{' '}
                            </span>
                            <span>
                              {' '}
                              <Icon className='action-elem' name='send outline large' />{' '}
                            </span>
                          </div>

                          <div>
                          <span>
                            {' '}
                            <Icon className='action-elem' name='bookmark outline large' />{' '}
                          </span>
                          </div>
                        </Card.Description>
                        <Card.Description> <p className='feed-image-like-count'>1,022 likes</p></Card.Description>
                        <Card.Meta>View All 106 comments</Card.Meta>
                        <Card.Description>
                          <strong>Daniel </strong>
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
                      </Card.Content>
                      <Card.Content>
                        <Card.Meta>2 days ago</Card.Meta>
                      </Card.Content>
                      <Form>
                        <Form.Group inline>
                          <Form.Field>
                            <Input placeholder='(xxx)' />
                          </Form.Field>
                          <span>
                            <Button>POST</Button>
                          </span>
                        </Form.Group>
                      </Form>
                    </Card>
                  )
                })}
              </div>
              <div className='feed-suggestions-div'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage