import React from "react";
import GalleryShowCard from "../gallery/GalleryShowCard";
import Title from "../components/Title";
import "../website/welcome.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: true,
      name: "Gallery"
    };
  }
  render() {
    return (
      <section id="gallery">
        <Title name={this.state.name} />
        <div className="gallery-container">
          <div className="row1">
            <GalleryShowCard />
          </div>
          <div className="row2" />
          {/* <GalleryList /> */}
        </div>
      </section>
    );
  }
}

export default Gallery;
