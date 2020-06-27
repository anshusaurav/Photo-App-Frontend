import React, { createRef } from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import {Icon} from 'semantic-ui-react'
class ExplorePage extends React.Component {
  render () {
    return (
      <div className='full-container'>
        <div className='header-nav'>
        <GlobalFonts/>
            <PageHeaderCustom>Altgram</PageHeaderCustom>
          <ul>
            <li><Icon name='home' /></li>
            <li><Icon name='compass'/></li>
            <li><Icon name='user circle'/></li>
          </ul>
        </div>

        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
        <div>
          <img src='https://cdn3.whatculture.com/images/2019/06/6663927516b3a0b4-600x338.jpg'></img>
        </div>
      </div>
    )
  }
}

export default ExplorePage
