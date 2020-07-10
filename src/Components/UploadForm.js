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
      filenameld: null,
      filenamehd: null,
      filenamemd: null,
      imagePreviewUrl: '',
      description: '',
      tagList: '',
      location: '',
      loaded: 0,
      visible: true,
      isUploadingToCloud: false
    }
    this.onImageChange = this.onImageChange.bind(this)
    this.onChangeHandler = this.onChangeHandler.bind(this)
    this.onSubmitHandler = this.onSubmitHandler.bind(this)
  }
  async onImageChange (event) {
    event.preventDefault()
    try {
      const imageFile = event.target.files[0]
      const type = `${imageFile.type}`
      const optionsOne = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
        fileType: type
      }
      const optionsTwo = {
        maxSizeMB: 0.6,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: type
      }
      const optionsThree = {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 880,
        useWebWorker: true,
        fileType: type
      }
      const compressedFileOne = await imageCompression(imageFile, optionsOne)
      const compressedFileTwo = await imageCompression(imageFile, optionsTwo)
      const compressedFileThree = await imageCompression(
        imageFile,
        optionsThree
      )
      console.log(
        'compressedFile instanceof Blob',
        compressedFileOne instanceof Blob
      )
      let fileOne = compressedFileOne
      let readerOne = new FileReader(fileOne)

      let fileTwo = compressedFileTwo
      let readerTwo = new FileReader(fileTwo)

      let fileThree = compressedFileThree
      let readerThree = new FileReader(fileThree)

      this.setState(prevState => ({ visible: !prevState.visible }))
      this.setState({ imagePreviewUrl: '' })
      readerOne.onloadend = () => {
        readerTwo.onloadend = () => {
          readerThree.onloadend = () => {
            this.setState(
              {
                filename: imageFile,
                filenamehd: fileOne,
                filenamemd: fileTwo,
                filenameld: fileThree,
                imagePreviewUrl: readerOne.result
              },
              function () {
                this.setState(prevState => ({ visible: !prevState.visible }))
              }
            )
          }
        }
      }

      readerOne.readAsDataURL(fileOne)
      readerTwo.readAsDataURL(fileTwo)
      readerThree.readAsDataURL(fileThree)
    } catch (error) {
      console.log(error)
    }
  }
  onChangeHandler (event) {
    switch (event.target.name) {
      case 'description':
        this.setState({ description: event.target.value })
        break
      case 'location':
        this.setState({ location: event.target.value })
        break
      case 'tags':
        const tagsArr = event.target.value.split(' ')
        const tagList = tagsArr.map(elem => elem.replace(/,+$/, ''))
        this.setState({ tagList: tagList })
        break
      default:
        console.log('Invalid target')
    }
  }
  onSubmitHandler (event) {
    const url = 'http://localhost:4000/api/p/'
    const formData = new FormData()
    const {
      filename,
      description,
      location,
      tagList,
      filenamehd,
      filenameld,
      filenamemd
    } = this.state
    const { jwttoken } = localStorage
    formData.append('description', description)
    formData.append('location', location)
    formData.append('tags', JSON.stringify(tagList))
    formData.append('filename', filename)
    formData.append('filenameld', filenameld)
    formData.append('filenamehd', filenamemd)
    formData.append('filenamemd', filenamehd)
    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${jwttoken}`
    }
    this.setState({isUploadingToCloud: true})
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
        this.setState({isUploadingToCloud: false})
        console.log(res.statusText)
      })
  }

  render () {
    const {
      description,
      location,
      tagList,
      visible,
      isUploadingToCloud
    } = this.state
    const { toggleLoggedIn } = this.props
    return (
      <div className='full-container'>
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
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
                {Math.floor(this.state.loaded) !== 0 ? (
                  <div>
                    <Progress
                      percent={Math.floor(this.state.loaded)}
                      active={Math.floor(this.state.loaded) !== 100}
                      inverted
                      color='blue'
                      progress
                    ></Progress>
                  </div>
                ) : (
                  ''
                )}
                <div className='ui horizontal divider'>Image Preview</div>

                <div className='file-select-input-div'>
                  <input
                    className='input-file-elem'
                    name='filename'
                    type='file'
                    defaultValue={this.state.filename}
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
              {isUploadingToCloud ? (
                <Button fluid loading primary>
                  Loading
                </Button>
              ) : (
                <Button
                  fluid
                  type='submit'
                  // disabled={!this.state.isSubmitable}
                  color='blue'
                >
                  Upload
                </Button>
              )}
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default UploadForm
