import HeaderUl from './HeaderUl'
import React from 'react'
import { Link } from 'react-router-dom'
import GlobalFonts from './../../fonts/fonts'
import PageHeaderCustom from './../PageHeaderCustom'
class HeaderNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange (event) {
    if (event.keyCode === 13) {
    } else {
      this.setState({ searchText: event.target.value }, async() => {
      
        const url = 'http://localhost:4000/api/search/';
        const searchQuery = this.state.searchText;
        const {jwttoken} = localStorage;

        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Typee': 'application/json', Authorization: `Token ${jwttoken}`},
            body: JSON.stringify({searchQuery})
          })
          let data = await response.json();
          console.log(data);
          if(!data.errors) {

          }

        } catch (error) {
          console.error('Error:', error);
          const errors = []
          errors.push(error.toString());
          this.setState({ errorMsgs: errors })
        }
      })
    }
  }
  render () {
    const { toggleLoggedIn } = this.props
    const { searchText } = this.state
    return (
      <div className='header-nav'>
        <div className='header-inner-div'>
          <Link to='/' exact='true'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
          </Link>
          <div className='ui search'>
            <div className='ui icon input'>
              <input
                type='text'
                tabIndex='0'
                className='prompt'
                autoComplete='off'
                value={searchText}
                onChange={this.handleChange}
              />
              <i aria-hidden='true' className='search icon'></i>
            </div>
            <div className='results transition'>
              <div className='message empty'>
                <div className='header'>No results found.</div>
              </div>
            </div>
          </div>
          <HeaderUl toggleLoggedIn={toggleLoggedIn} />
        </div>
      </div>
    )
  }
}

export default HeaderNav
