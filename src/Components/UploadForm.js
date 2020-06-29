import React from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import { Form, Button, Checkbox, Icon } from 'semantic-ui-react'
class UploadForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedFile: null,
      description: '',
      tags: '',
      Location: ''
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  
  onChangeHandler(event) {

  }
  render () {
    return (
      <div className='full-container '>
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
        <div className='container upload-form-container'>
          <div className='upload-form-inner-div'>
            <Form>
              <div class='ui center aligned segment'>
                <div class='upload-icon-div'>
                  <Icon name='upload' size='huge' circular inverted />
                </div>
                <div class='ui button'>Drag and Drop Here</div>
                <div class='ui horizontal divider'>OR</div>

                <div className='file-select-input-div'>
                  <input name='file' type='file'></input>
                </div>
              </div>

              <Form.Field>
                <input placeholder='Description' name='description' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Location' name='location' />
              </Form.Field>
              <Form.Field>
                <input placeholder='Tags' name='tags' />
              </Form.Field>

              <Button fluid type='submit'>
                Upload
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default UploadForm
