import React, { createRef } from 'react'
import { Button, Form } from 'semantic-ui-react'
import imageCompression from 'browser-image-compression'
import axios from 'axios'
class ProfilePicturePopUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      filename : null
    }
    this.fileInputRef = createRef()
    this.changehandleClick = this.changehandleClick.bind(this);
    this.handleUpdatePicture = this.handleUpdatePicture.bind(this);
    this.changeSubmitHandler = this.changeSubmitHandler.bind(this);
  }
  changehandleClick(event) {
    this.fileInputRef.current.click();
  }
  handleUpdatePicture(event){
    event.preventDefault()
    console.dir(this.fileInputRef.current);
    console.log('Form submitted');
  }
  // onChangeFile(event){
  //   // console.log(event.target.files[0]);
  //   this.setState({filename: event.target.files[0]}, ()=>{
  //     this.changeSubmitHandler();
  //   });

  //   this.props.handleClose();
  // }
  async changeSubmitHandler(event){
    const url = `http://localhost:4000/api/user`
    
    const {jwttoken} = localStorage;
    const filename = event.target.files[0];
    console.log('originalFile instanceof Blob', filename instanceof Blob) // true
    console.log(`originalFile size ${filename.size / 1024 / 1024} MB`)

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }
    try {
      console.log('shaktiman');
      const compressedFile = await imageCompression(filename, options)
      console.log(
        'compressedFile instanceof Blob',
        compressedFile instanceof Blob
      ) // true
      console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`) // smaller than maxSizeMB
      let reader = new FileReader();
      let file = compressedFile;
      const formData = new FormData();
      formData.append('filename', file);
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Token ${jwttoken}`
      }
      axios.put(url, formData, {
        headers: headers,

        onUploadProgress: ProgressEvent => {
          // this.setState({
          //   loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100
          // })
          console.log(ProgressEvent.loaded, ProgressEvent.total)
        }
      })
      .then(res => {
        console.log(res.statusText);
        this.props.handleClose();
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
          <Button className='change-picture-pop-btn' fluid onClick={this.changehandleClick}>
            Upload Photo
          </Button>
          <Button className='change-picture-pop-btn' fluid>
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
              onChange= {this.changeSubmitHandler}
              ref={this.fileInputRef}
            ></input>
          </Form>
        </div>
      </div>
    )
  }
}
export default ProfilePicturePopUp
