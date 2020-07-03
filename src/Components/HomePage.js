import React from 'react'

import HeaderNav from './common/HeaderNav'
import { Button } from 'semantic-ui-react'
import FeedImageElem from './common/FeedImageElem'
class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = { imagepostList: null }
  }
  async savePosts () {
    const { jwttoken } = localStorage
    const url = `http://localhost:4000/api/p/feed`
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/JSON',
          Authorization: `Token ${jwttoken}`
        }
      })
      const data = await response.json();
      console.log(data);
      if (!data.errors) {
        this.setState({ imagepostList: data.imageposts })
      }
    } catch (error) {
      console.error('Error: ' + error)
    }
  }
  componentDidMount () {
    this.savePosts()
  }

  render () {
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
    const { toggleLoggedIn } = this.props;
    const {imagepostList} = this.state;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div>
          <div className='container'>
            <div className='home-page-div'>
              <div className='feed-images-div'>
                {imagepostList && imagepostList.map(img => {
                  return <FeedImageElem img={img.slug} />
                })}
              </div>
              <div className='feed-suggestions-div'>
                <div className='feed-suggestion-inner-div'>
                  <div className='feed-profile-div'>
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
                              <img src={elem.image} alt=''></img>
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
