import React from 'react'
import HeaderNav from './common/HeaderNav'
// import { Icon } from 'semantic-ui-react'
class ExplorePage extends React.Component {


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
    const {toggleLoggedIn} = this.props;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn}/>
        <div>
          <div className='explore-img-div container'>
            {arr.map(img => {
              return (
                <div className='explore-item'>
                  <div className='content'>
                    <a className='link-img' href='#' target='_blank'>
                      <img src={img} alt></img>
                      <div className='content-overlay'></div>
                      <div className='content-details fadeIn-bottom'>
                        <h2 className='content-title'>
                          <i aria-hidden='true' className='like icon'></i> 456
                        </h2>
                        <h2 className='content-title'>
                          <i aria-hidden='true' className='comment  icon'></i>{' '}
                          123
                        </h2>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default ExplorePage
