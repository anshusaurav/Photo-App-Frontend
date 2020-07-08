import React, { createRef } from 'react'
import { Button, Form } from 'semantic-ui-react'
import imageCompression from 'browser-image-compression'
import axios from 'axios'
class ProfilePicturePopUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filename: null
    }
    this.fileInputRef = createRef()
    this.changehandleClick = this.changehandleClick.bind(this)
    this.handleUpdatePicture = this.handleUpdatePicture.bind(this)
    this.changeSubmitHandler = this.changeSubmitHandler.bind(this)
    this.removeSubmitHandler = this.removeSubmitHandler.bind(this)
  }
  changehandleClick (event) {
    this.fileInputRef.current.click()
  }
  handleUpdatePicture (event) {
    event.preventDefault()
  }

  async changeSubmitHandler (event) {
    const url = `http://localhost:4000/api/user`

    const { jwttoken } = localStorage
    const filename = event.target.files[0]
    const type = `${filename.type}`
    // console.log(type);
    console.log('originalFile instanceof Blob', filename instanceof Blob) // true
    console.log(`originalFile size ${filename.size / 1024 / 1024} MB`)

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      fileType: type
    }
    try {
      const compressedFile = await imageCompression(filename, options)
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob
      ) // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`)
      let file = compressedFile
      let reader = new FileReader(file)

      reader.onloadend = () => {
        const formData = new FormData()
        formData.append('image', compressedFile)
        const headers = {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${jwttoken}`
        }
        axios
          .put(url, formData, {
            headers: headers,

            onUploadProgress: ProgressEvent => {
              console.log(ProgressEvent.loaded, ProgressEvent.total)
            }
          })
          .then(res => {
            console.log('done')
          })
      }

      reader.readAsDataURL(file)
    } catch (error) {
      console.log(error)
    }
  }
  removeSubmitHandler (event) {
    console.log('Remove')
    const url = `http://localhost:4000/api/user`

    const { jwttoken } = localStorage

    try {
      const formData = new FormData()
      formData.append('signal', 'remove')
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${jwttoken}`
      }
      axios
        .put(url, formData, {
          headers: headers,

          onUploadProgress: ProgressEvent => {
            console.log(ProgressEvent.loaded, ProgressEvent.total)
          }
        })
        .then(res => {
          this.props.handleClose()
          this.props.toggleUpdate()
        })
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    return (
      <div className='change-picture-pop-outer-div'>
        <div className='change-picture-pop-inner-div'>
          <div>
            <h2>Change Profile Photo</h2>
          </div>
          <Button
            className='change-picture-pop-btn'
            fluid
            onClick={this.changehandleClick}
          >
            Upload Photo
          </Button>
          <Button
            className='change-picture-pop-btn'
            fluid
            onClick={this.removeSubmitHandler}
          >
            Remove Current Photo
          </Button>
          <Button
            className='change-picture-pop-btn'
            fluid
            onClick={this.props.handleClose}
          >
            Cancel
          </Button>
          <Form onSubmit={this.handleUpdatePicture}>
            <input
              className='change-profile-input-file-elem'
              name='filename'
              type='file'
              onChange={this.changeSubmitHandler}
              ref={this.fileInputRef}
            ></input>
          </Form>
        </div>
      </div>
    )
  }
}
export default ProfilePicturePopUp
