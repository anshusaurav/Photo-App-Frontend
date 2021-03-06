import React from 'react'

import HeaderNav from './common/HeaderNav'
import { Button, Card } from 'semantic-ui-react'
import FeedImageElem from './common/FeedImageElem'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  FeedHeaderLoader,
} from './loaders/loaders'
import axios from 'axios'
class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imagepostList: [],
      limit: 6,
      offset: 0,
      hasMoreImages: true,
      totalImages: 0
    }
  }

  componentDidMount () {
    const { jwttoken } = localStorage
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${jwttoken}`
    }
    const { offset, limit } = this.state

    axios
      .get(`http://localhost:4000/api/p/feed?offset=${offset}&limit=${limit}`, {
        headers: headers
      })
      .then(res => {
        this.setState({ imagepostList: res.data.imageposts }, function () {
          this.setState({ totalImages: res.data.imagepostCount }, function () {
            if (offset + limit >= res.data.imagepostCount)
              this.setState({ hasMoreImages: false })
          })
        })
      })
  }
  fetchImages = () => {
    const { jwttoken } = localStorage
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${jwttoken}`
    }
    const { offset, limit } = this.state
    if (offset + limit >= this.state.totalImages)
      this.setState({ hasMoreImages: false })
    this.setState({ offset: this.state.offset + limit })
    axios
      .get(
        `http://localhost:4000/api/p/feed?offset=${offset +
          limit}&limit=${limit}`,
        {
          headers: headers
        }
      )
      .then(res => {
        // console.log(res);
        this.setState(prevState => ({
          imagepostList: prevState.imagepostList.concat(res.data.imageposts)
        }))
      })
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
    const { toggleLoggedIn } = this.props
    const { imagepostList } = this.state;
    // console.log(imagepostList);
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div>
          <div className='container'>
            <div className='home-page-div'>
              <div className='feed-images-div'>
                {this.state.imagepostList.length > 0 && (
                  <InfiniteScroll
                    dataLength={this.state.imagepostList.length}
                    next={this.fetchImages}
                    hasMore={this.state.hasMoreImages}
                    loader={
                      <>
                        <Card className='feed-image-card'>
                          <FeedHeaderLoader />
                        </Card>
                        <Card className='feed-image-card'>
                          <FeedHeaderLoader />
                        </Card>
                        <Card className='feed-image-card'>
                          <FeedHeaderLoader />
                        </Card>
                      </>
                    }
                  >
                    {imagepostList.map((img, index) => {
                      return <FeedImageElem img={img.slug} key={index} />
                    })}
                  </InfiniteScroll>
                )}
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
                    {suggestions.map((elem, index) => {
                      return (
                        <div
                          className='feed-suggestion-profile-inner-div'
                          key={index}
                        >
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
