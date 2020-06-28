import React from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import { Icon } from 'semantic-ui-react'
class ExplorePage extends React.Component {
  //   state = { name: '', email: '', username: '', fullname: '', password:'' }

  //   handleChange = (e, { name, value }) => this.setState({ [name]: value })

  //   handleSubmit = () => {
  //     const { name, email } = this.state;

  //     this.setState({ submittedName: name, submittedEmail: email })
  //   }
  
  render () {
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
                <i aria-hidden='true' className='compass large icon'></i>
              </li>
              <li>
                <i aria-hidden='true' className='photo large icon'></i>
              </li>
              <li>
                <i aria-hidden='true' className='user circle large icon'></i>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className='explore-img-div container'>
            <div class='explore-item'>
              <div class='content'>
                <a href='#' target='_blank'>
                  <img src='https://images.pexels.com/photos/3088778/pexels-photo-3088778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
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
            <div class='explore-item'>
              <div class='content'>
                <a href='#' target='_blank'>
                  <div className='content-overlay'></div>
                  <img src='https://images.pexels.com/photos/1628233/pexels-photo-1628233.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
                  <div className='content-details fadeIn-bottom'>
                    <h2 className='content-title'>
                     
                      <i aria-hidden='true' className='like icon'></i> 116
                    </h2>
                    <h2 className='content-title'>
                      
                      <i aria-hidden='true' className='comment icon'></i> 123
                    </h2>
                  </div>
                </a>
              </div>
            </div>
            <div class='explore-item'>
              <div class='content'>
                <a href='#' target='_blank'>
                  <div className='content-overlay'></div>
                  <img src='https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?cs=srgb&dl=person-pointing-at-black-and-gray-film-camera-near-macbook-1051075.jpg&fm=jpg'></img>
                  <div className='content-details fadeIn-bottom'>
                    <h2 className='content-title'>
                      
                      <i aria-hidden='true' className='like icon'></i> 456
                    </h2>
                    <h2 className='content-title'>
                      
                      <i aria-hidden='true' className='comment icon'></i> 123
                    </h2>
                  </div>
                </a>
              </div>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?cs=srgb&dl=camera-iphone-macbook-pro-office-62689.jpg&fm=jpg'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/2130134/pexels-photo-2130134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/372882/pexels-photo-372882.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4681113/pexels-photo-4681113.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4681074/pexels-photo-4681074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4681080/pexels-photo-4681080.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4614167/pexels-photo-4614167.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500  '></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/917499/pexels-photo-917499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>

            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/1485548/pexels-photo-1485548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
            <div className='explore-item'>
              <img src='https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExplorePage
