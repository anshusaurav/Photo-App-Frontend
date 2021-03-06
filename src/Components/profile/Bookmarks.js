import React from "react";
import ImageElem from "./../common/ImageElem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { SingleImageLoaderLarge } from "./../loaders/loaders";
class BookMarks extends React.Component {
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
    }

    componentDidMount() {
        const { jwttoken } = localStorage;
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Token ${jwttoken}`,
        };
        const { offset, limit } = this.state;
        axios
            .get(
                `http://localhost:4000/api/p?saved=${loggedInUser.username}&offset=${offset}&limit=${limit}`,
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
                `http://localhost:4000/api/p?saved=${loggedInUser.username}&offset=${
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
    render() {
        const { imagepostList } = this.state;
        // console.log(imagepostList);
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
                            return <ImageElem img={img} key={img.id} />;
                        })}
                    </InfiniteScroll>
                ) : (
                        <div className="profile-img-div"> </div>
                    )}
            </>
        );
    }
}

export default BookMarks;
