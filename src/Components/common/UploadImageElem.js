import React from "react";
import { Icon } from "semantic-ui-react";
import ProgressiveImage from "react-progressive-image";
class UploadImageElem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  async handleDelete() {
    console.log("handle delete called");
    const { slug } = this.props.img;
    const url = `http://localhost:4000/api/p/${slug}`;
    const { jwttoken } = localStorage;
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${jwttoken}`,
        },
      });
      let data = await response.json();
      if (!data.errors) {
        this.props.toggleUpdate();
      } else {
        const errors = [];
        for (const [key, value] of Object.entries(data.errors)) {
          errors.push(`${key} ${value}`);
        }
        this.setState({ errorMsgs: errors });
      }
    } catch (error) {
      console.error("Error: ", error);
      const errors = [];
      errors.push(error.toString());
      this.setState({ errorMsgs: errors });
    }
  }
  render() {
    console.log(this.props.img);
    const { filename, filenamesPL, isImage } = this.props.img;
    // console.log(slug);
    return (
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
            <Icon
              name="delete"
              size="large"
              color="purple"
              style={{ position: "absolute", top: 8, left: 8 }}
              onClick={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UploadImageElem;
