import React from "react";
import GalleryShowCard from "../gallery/GalleryShowCard";
import GalleryList from "../gallery/GalleryList";
import "../website/welcome.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showGallery: true
    };
  }
  render() {
    return (
      <section id="gallery">
        <div className="gallery-container">
          <div className="row1">
            <GalleryShowCard />
          </div>
          <div className="row2" />
          <GalleryList />
        </div>
      </section>
    );
  }
}

export default Gallery;
