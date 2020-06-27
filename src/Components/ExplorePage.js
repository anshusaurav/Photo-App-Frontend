import React from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import { Icon } from 'semantic-ui-react'
class ExplorePage extends React.Component {
  render () {
    return (
      <div className='full-container'>
        <div className='header-nav'>
          <div className='header-inner-div'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
            <div fallbackElement='[object Object]' class='ui search'>
              <div class='ui icon input'>
                <input
                  type='text'
                  value=''
                  tabindex='0'
                  class='prompt'
                  autocomplete='off'
                />
                <i aria-hidden='true' class='search icon'></i>
              </div>
              <div class='results transition'>
                <div class='message empty'>
                  <div class='header'>No results found.</div>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <i aria-hidden='true' class='home large icon'></i>
              </li>
              <li>
                <i aria-hidden='true' class='compass large icon'></i>
              </li>
              <li>
                <i aria-hidden='true' class='user circle large icon'></i>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='explore-img-div container'>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/3088778/pexels-photo-3088778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1628233/pexels-photo-1628233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?cs=srgb&dl=person-pointing-at-black-and-gray-film-camera-near-macbook-1051075.jpg&fm=jpg'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?cs=srgb&dl=camera-iphone-macbook-pro-office-62689.jpg&fm=jpg'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            

            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
          

            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div class='explore-item'>
              <img src='https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExplorePage
