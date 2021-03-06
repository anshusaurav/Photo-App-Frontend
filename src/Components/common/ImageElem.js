import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import PopUpImageElem from "./PopUpImageElem";
import ProgressiveImage from "react-progressive-image";
class ImageElem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({ isOpen: true });
  }
  handleClose() {
    this.setState({ isOpen: false });
  }
  render() {
    // console.log(this.props.img)
    const {
      commentsCount,
      favoritesCount,
      filename,
      filenamesPL,
      isImage,
    } = this.props.img;
    return (
      <Popup
        on="click"
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        style={{
          position: "fixed",
          minWidth: "100vw",
          minHeight: "100vh",
          top: "0vh",
          left: "0vw",
          transform: "none",
          marginTop: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          cursor: "pointer",
        }}
        className="image-elem-popup-small"
        trigger={
          <div className="explore-item">
            <div className="content">
              <div className="link-img" href="#" target="_blank">
                {isImage === 1 ? (
                  <ProgressiveImage
                    src={`${filename}`}
                    placeholder={`${filenamesPL[0]}`}
                  >
                    {(src, loading) => (
                      <img
                        style={{ opacity: loading ? 0.5 : 1 }}
                        src={src}
                        alt="Posted By User"
                      />
                    )}
                  </ProgressiveImage>
                ) : (
                  <div style={{ position: "relative" }}>
                    <ProgressiveImage
                      src={`${filenamesPL[0]}`}
                      placeholder={`${filenamesPL[0]}`}
                    >
                      {(src, loading) => (
                        <img
                          style={{
                            opacity: loading ? 0.5 : 1,
                            objectFit: "cover",
                          }}
                          src={src}
                          alt="Posted By User"
                        />
                      )}
                    </ProgressiveImage>
                    <Icon
                      disabled
                      name="video"
                      size="large"
                      style={{ position: "absolute", top: 8, right: 8 }}
                    />
                  </div>
                )}
                {/* <img src={`${filename}`} alt=' '></img> */}
                <div className="content-overlay"></div>
                <div className="content-details fadeIn-bottom">
                  <h2 className="content-title">
                    <i aria-hidden="true" className="like icon"></i>{" "}
                    {favoritesCount}
                  </h2>
                  <h2 className="content-title">
                    <i aria-hidden="true" className="comment  icon"></i>{" "}
                    {commentsCount}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <PopUpImageElem
          key={this.props.img.id}
          img={this.props.img.slug}
          handleClose={this.handleClose}
        />
      </Popup>
    );
  }
}
export default ImageElem;
