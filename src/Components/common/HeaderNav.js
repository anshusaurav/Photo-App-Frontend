import HeaderUl from './HeaderUl'
import React from 'react'
import {Search} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GlobalFonts from './../../fonts/fonts'
import PageHeaderCustom from './../PageHeaderCustom'
import _ from 'lodash'
class HeaderNav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: '',
      isLoading: false,
      results:[]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  async handleChange (event) {
    this.setState({isLoading: true})
    if (event.keyCode === 13) {
    } else {
      this.setState({ searchQuery: event.target.value }, async () => {
        const url = 'http://localhost:4000/api/search/'
        const searchQuery = this.state.searchQuery;
        const { jwttoken } = localStorage
        console.log(searchQuery);
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${jwttoken}`
            },
            body:JSON.stringify({ searchQuery })
          })
          let data = await response.json()
          console.log(data)
          if (!data.errors) {
            this.setState({results: data.users})
            this.setState({isLoading: false})
          }
        } catch (error) {
          console.error('Error:', error)
          const errors = []
          errors.push(error.toString())
          this.setState({ errorMsgs: errors })
        }
      })
    }
  }
  render () {
    const { toggleLoggedIn } = this.props
    const { searchQuery, isLoading, results } = this.state
    return (
      <div className='header-nav'>
        <div className='header-inner-div'>
          <Link to='/' exact='true'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
          </Link>
          <div className='ui search'>
            <div className='ui icon input'>
              <Search
                
                 loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleChange, 500, {
              leading: true,
            })}
            results={results}
            value={searchQuery}
            {...this.props}
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
