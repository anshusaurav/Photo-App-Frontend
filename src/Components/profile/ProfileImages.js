import React from 'react'
import ImageElem from './../common/ImageElem'
class ProfileImages extends React.Component {
 

  render () {
    
    const { imagepostList } = this.props
    // console.log('IM ', imagepostList)
    return (
      <div className='profile-img-div'>
        {imagepostList &&
          imagepostList.map(imagePost => {
            return (
              <ImageElem img={imagePost} />
            )
          })}
        
      </div>
    )
  }
}

export default ProfileImages
