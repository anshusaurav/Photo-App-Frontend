import React, { createRef } from 'react'
import { Form, Button, Image, Transition, Progress } from 'semantic-ui-react'
import imageCompression from 'browser-image-compression'
import axios from 'axios'
import HeaderNav from './common/HeaderNav'
class UploadForm extends React.Component {
  constructor (props) {
    super(props)
    this.contextRef = createRef()
    this.state = {
      filename: null,
      imagePreviewUrl: '',
      description: '',
      tagList: '',
      location: '',
      loaded: 0,
      visible: true
      // isSubmitable: false
    }
    this.onImageChange = this.onImageChange.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  async onImageChange (event) {
    event.preventDefault()
    const imageFile = event.target.files[0]
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      const compressedFile = await imageCompression(imageFile, options)
      console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
      let reader = new FileReader()
      let file = compressedFile

      this.setState(prevState => ({ visible: !prevState.visible }))
      this.setState({ imagePreviewUrl: '' })
      reader.onloadend = () => {
        this.setState(
          {
            filename: file,
            imagePreviewUrl: reader.result
          },
          function () {
            this.setState(prevState => ({ visible: !prevState.visible }))
          }
        )
      }

      reader.readAsDataURL(file)
    } catch (error) {
      console.log(error)
    }
  }
  onChangeHandler (event) {
    switch (event.target.name) {
      case 'description':
        this.setState({ description: event.target.value })
        break;
      case 'location':
        this.setState({ location: event.target.value })
        break;
      case 'tags':
        const tagsArr = event.target.value.split(' ')
        const tagList = tagsArr.map(elem => elem.replace(/,+$/, ''))
        this.setState({ tagList: tagList });
        break;
      default:
        console.log('Invalid target')
    }
  }
  onSubmitHandler (event) {
    const url = 'http://localhost:4000/api/p/'
    const formData = new FormData()
    const { filename, description, location, tagList } = this.state
    const {jwttoken} = localStorage;
    formData.append('description', description)
    formData.append('location', location)
    formData.append('tags', JSON.stringify(tagList))
    formData.append('filename', filename)
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    };
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization:
        `Token ${jwttoken}`
    }

    axios
      .post(url, formData, {
        headers: headers,

        onUploadProgress: ProgressEvent => {
          this.setState({
            loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          })
        }
      })
      .then(res => {
        console.log(res.statusText)
      })
  }

  render () {
    const { description, location, tagList, visible } = this.state;
    const {toggleLoggedIn} = this.props;
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn}/>
        <div className='container upload-form-container'>
          <div className='upload-form-inner-div'>
            <Form onSubmit={this.onSubmitHandler}>
              <div className='ui center aligned segment'>
                <div className='upload-icon-div'>
                  <div className='upload-img-container'>
                    <Transition
                      visible={visible}
                      animation='scale'
                      duration={500}
                    >
                      <Image
                        src={
                          this.state.imagePreviewUrl
                            ? this.state.imagePreviewUrl
                            : 'https://react.semantic-ui.com/images/wireframe/square-image.png'
                        }
                        size='medium'
                        rounded
                        fluid
                      />
                    </Transition>
                  </div>
                </div>
                {Math.floor(this.state.loaded) !== 0?
                <div>
                  <Progress percent={Math.floor(this.state.loaded)} active={Math.floor(this.state.loaded) !==100} inverted color='blue' progress></Progress>
                </div>:''
                }
                <div className='ui horizontal divider'>Image Preview</div>

                <div className='file-select-input-div'>
                  <input
                    className='input-file-elem'
                    name='filename'
                    type='file'
                    onChange={this.onImageChange}
                  ></input>
                </div>
              </div>

              <Form.Field>
                <input
                  placeholder='Description'
                  name='description'
                  value={description}
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Location'
                  name='location'
                  value={location}
                  onChange={this.onChangeHandler}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder='Tags'
                  name='tags'
                  value={tagList ? tagList.join(' ') : ''}
                  onChange={this.onChangeHandler}
                />
              </Form.Field>

              <Button
                fluid
                type='submit'
                // disabled={!this.state.isSubmitable}
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
