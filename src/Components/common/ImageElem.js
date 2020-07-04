import React from 'react'
import { Popup } from 'semantic-ui-react'
import PopUpImageElem from './PopUpImageElem'
class ImageElem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleOpen () {
    this.setState({ isOpen: true })
  }
  handleClose () {
    this.setState({ isOpen: false })
  }
  render () {
    const { commentsCount, favoritesCount, filename } = this.props.img;
    return (
      <Popup
        on='click'
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        style={{
          position: 'fixed',
          minWidth: '100vw',
          minHeight: '100vh',
          top: '0vh',
          left: '0vw',
          transform: 'none',
          marginTop: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          cursor: 'pointer'
        }}
        className='image-elem-popup-small'
        trigger={
          <div className='explore-item'>
            <div className='content'>
              <div className='link-img' href='#' target='_blank'>
                <img src={`http://localhost:4000/${filename}`} alt=' '></img>
                <div className='content-overlay'></div>
                <div className='content-details fadeIn-bottom'>
                  <h2 className='content-title'>
                    <i aria-hidden='true' className='like icon'></i>{' '}
                    {favoritesCount}
                  </h2>
                  <h2 className='content-title'>
                    <i aria-hidden='true' className='comment  icon'></i>{' '}
                    {commentsCount}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <PopUpImageElem
          key = {this.props.img.id}
          img={this.props.img.slug}
          handleClose={this.handleClose}
        />
      </Popup>
    )
  }
}
export default ImageElem
