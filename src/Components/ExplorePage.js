import React from "react";
import HeaderNav from "./common/HeaderNav";
import ImageElem from "./common/ImageElem";
class ExplorePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imagepostList: null };
  }
  async savePosts() {
    const { jwttoken } = localStorage;
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const url = `http://localhost:4000/api/p`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Token ${jwttoken}`,
        },
      });
      const data = await response.json();
      if (!data.errors) {
        this.setState({ imagepostList: data.imageposts });
      }
    } catch (error) {
      console.error("Error: " + error);
    }
  }
  componentDidMount() {
    this.savePosts();
  }
  render() {
    const { imagepostList } = this.state;
    const { toggleLoggedIn } = this.props;
    return (
      <div className="full-container">
        <HeaderNav toggleLoggedIn={toggleLoggedIn} />
        <div>
          <div className="explore-img-div container">
            {imagepostList &&
              imagepostList.map((img) => {
                return <ImageElem img={img} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
