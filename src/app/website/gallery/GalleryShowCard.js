import React from "react";

const GalleryShowCard = props => {
  return (
    <React.Fragment>
      <article className="show-pic">
        <div>
          <img src={require("../../../images/hair-1.jpeg")} alt="pic" />
          <h1>Short Cuts</h1>
        </div>
      </article>
      <article className="show-pic">
        <img src={require("../../../images/natural-look.jpeg")} alt="pic" />
        <h1>Long Cuts</h1>
      </article>
      <article className="show-pic">
        <img src={require("../../../images/kids-hair.jpeg")} alt="pic" />
        <h1>Natural Hair</h1>
      </article>
      <article className="show-pic">
        <img src={require("../../../images/hair-6.jpeg")} alt="pic" />
        <h1>Hair Extensions</h1>
      </article>
    </React.Fragment>
  );
};

export default GalleryShowCard;
