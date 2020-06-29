import React from 'react'
import GlobalFonts from './../fonts/fonts'
import PageHeaderCustom from './PageHeaderCustom'
import { Form, Button, Checkbox, Icon } from 'semantic-ui-react'
import axios from 'axios'
class UploadForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filename: null,
      description: '',
      tagList: '',
      location: '',
      isSubmitable: false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  
  onChangeHandler (event) {
    
    switch (event.target.name) {
      case 'filename':  
          this.setState(
            {
              filename: event.target.files[0],
            },
            function () {
              if (this.state.filename) this.setState({ isSubmitable: true })
              else this.setState({ isSubmitable: false })
            }
          )
        break
      case 'description':
        this.setState({description: event.target.value})
        break;
      case 'location':
        this.setState({location: event.target.value});
        break;
      case 'tags':
        const tagList = event.target.value.split(' ');
        this.setState({tagList: tagList});
      default:
        console.log('Invalid target');


    }
  }
  onSubmitHandler (event) {
    const url = 'http://localhost:4000/api/p/'
    const formData = new FormData();
    const {filename, description, location, tagList} = this.state;
    formData.append('description', description);
    formData.append('location', location);
    formData.append('tags', JSON.stringify(tagList));
    formData.append('filename', filename);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization':
        'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjg2MGY0M2ViNTBhODAzMmEzYzM0MCIsInVzZXJuYW1lIjoic2V0dXNhdXJhYmgiLCJleHAiOjE1OTg1OTgzODgsImlhdCI6MTU5MzQxNDM4OH0.eD1BeSYNFMs4qC6yRewczB_hOFipMKwkUtoQM55yscc'
    }
    axios
      .post(url, formData, {
        headers: headers
      })
      .then(res => {
        console.log(res.statusText)
      })
  }

  render () {
    const { filename, description, location, tagList } = this.state;
    return (
      <div className='full-container '>
        <div className='header-nav'>
          <div className='header-inner-div'>
            <GlobalFonts />
            <PageHeaderCustom>Instagram</PageHeaderCustom>
            <div className='ui search'>
              <div className='ui icon input'>
                <input type='text' />
                <i aria-hidden='true' className='search icon'></i>
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
            <Form onSubmit={this.onSubmitHandler}>
              <div className='ui center aligned segment'>
                <div className='upload-icon-div'>
                  <Icon name='upload' size='huge' circular inverted />
                </div>
                <div className='ui button'>Drag and Drop Here</div>
                <div className='ui horizontal divider'>OR</div>

                <div className='file-select-input-div'>
                  <input
                    className='input-file-elem'
                    name='filename'
                    type='file'
                    onChange={this.onChangeHandler}
                  ></input>
                </div>
              </div>

              <Form.Field>
                <input placeholder='Description' name='description' value={description} onChange={this.onChangeHandler}/>
              </Form.Field>
              <Form.Field>
                <input placeholder='Location' name='location' value={location} onChange={this.onChangeHandler}/>
              </Form.Field>
              <Form.Field>
                <input placeholder='Tags' name='tags' value={tagList ? tagList.join(' ') : ''} onChange={this.onChangeHandler}/>
              </Form.Field>

              <Button
                fluid
                type='submit'
                disabled={!this.state.isSubmitable}
                color='blue'
              >
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
