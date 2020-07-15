import React from 'react'
import HeaderNav from './common/HeaderNav'
import ImageElem from './common/ImageElem'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import {
  ExploreCompleteLoader
} from './loaders/loaders'
class ExplorePage extends React.Component {
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
      .get(`http://localhost:4000/api/p?offset=${offset}&limit=${limit}`, {
        headers: headers
      })
      .then(res => {
        this.setState({ imagepostList: res.data.imageposts })
        this.setState({ totalImages: res.data.imagepostCount })
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
        `http://localhost:4000/api/p?offset=${offset + limit}&limit=${limit}`,
        {
          headers: headers
        }
      )
      .then(res => {
        this.setState(prevState => ({
          imagepostList: prevState.imagepostList.concat(res.data.imageposts)
        }))
      })
  }
  render () {
    const { imagepostList } = this.state
    const { toggleLoggedIn } = this.props
    return (
      <div className='full-container'>

        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div>
          <div>
            {this.state.imagepostList.length > 0 ? (
              <InfiniteScroll

                className='explore-img-div container'
                dataLength={this.state.imagepostList.length}
                next={this.fetchImages}
                hasMore={this.state.hasMoreImages}
                loader={

                  <ExploreCompleteLoader/>
                }
              >
                {imagepostList.map(img => {
                  return <ImageElem img={img} key={img.filename} />
                })}
              </InfiniteScroll>
            ) : (
              <div className='profile-img-div'> </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ExplorePage
