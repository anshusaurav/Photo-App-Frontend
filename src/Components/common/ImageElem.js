import React from 'react'
import { Popup } from 'semantic-ui-react';
class ImageElem extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <Popup trigger={
        <div className='explore-item'>
          <div className='content'>
            <a className='link-img' href='#' target='_blank'>
              <img src={this.props.url} alt></img>
              <div className='content-overlay'></div>
              <div className='content-details fadeIn-bottom'>
                <h2 className='content-title'>
                  <i aria-hidden='true' className='like icon'></i> 456
                </h2>
                <h2 className='content-title'>
                  <i aria-hidden='true' className='comment  icon'></i> 123
                </h2>
              </div>
            </a>
          </div>
        </div>
      }>
      </Popup>
    )
  }
}
export default ImageElem
