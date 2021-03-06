import React from "react";
import UploadImageElem from "./../common/UploadImageElem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { SingleImageLoaderLarge } from "./../loaders/loaders";
class Uploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagepostList: [],
      isUpdated: false,
      limit: 6,
      offset: 0,
      hasMoreImages: true,
      totalImages: 0,
    };

    this.toggleUpdate = this.toggleUpdate.bind(this);
  }
  toggleUpdate() {
    this.setState({ isUpdated: !this.state.isUpdated });
  }
  startFetching() {
    const { jwttoken } = localStorage;
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${jwttoken}`,
    };
    const { offset, limit } = this.state;
    axios
      .get(
        `http://localhost:4000/api/p?author=${loggedInUser.username}&offset=${offset}&limit=${limit}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        this.setState({ imagepostList: res.data.imageposts });
        this.setState({ totalImages: res.data.imagepostCount });
        if (offset + limit >= res.data.imagepostCount)
          this.setState({ hasMoreImages: false });
      });
  }
  componentDidMount() {
    this.startFetching();
  }
  fetchImages = () => {
    const { jwttoken } = localStorage;
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${jwttoken}`,
    };
    const { offset, limit } = this.state;
    if (offset + limit >= this.state.totalImages)
      this.setState({ hasMoreImages: false });
    this.setState({ offset: this.state.offset + limit });
    axios
      .get(
        `http://localhost:4000/api/p?author=${loggedInUser.username}&offset=${
        offset + limit
        }&limit=${limit}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        this.setState((prevState) => ({
          imagepostList: prevState.imagepostList.concat(res.data.imageposts),
        }));
      });
  };
  componentDidUpdate(_prevProps, prevState) {
    if (this.state.isUpdated !== prevState.isUpdated) {
      this.setState(
        {
          imagepostList: [],
          limit: 6,
          offset: 0,
          hasMoreImages: true,
          totalImages: 0,
        },
        () => this.startFetching()
      );
      // this.fetchImages();
    }
  }
  render() {
    const { imagepostList } = this.state;
    console.log(imagepostList);
    return (
      <>
        {imagepostList.length > 0 ? (
          <InfiniteScroll
            className="uploads-img-div container"
            dataLength={this.state.imagepostList.length}
            next={this.fetchImages}
            hasMore={imagepostList && this.state.hasMoreImages}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              width: "100%",
              borderTop: "none",
              boxSizing: "border-box",
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem'
            }}
            loader={
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridGap: "30px",
                }}
              >
                <SingleImageLoaderLarge />
                <SingleImageLoaderLarge />
                <SingleImageLoaderLarge />
              </div>
            }
          >
            {imagepostList.map((img) => {
              return (
                <UploadImageElem
                  img={img}
                  key={img.id}
                  toggleUpdate={this.toggleUpdate}
                />
              );
            })}
          </InfiniteScroll>
        ) : (
            <div
              className="uploads-img-div"
              style={{ width: "100%", borderTop: "none" }}
            >
              {" "}
            </div>
          )}
      </>
    );
  }
}

export default Uploads;
