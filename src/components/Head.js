import React from "react";

const Head = () => {
  return (
    <div className="client-header">
      <h3>Title</h3>
      <h5>Some Info</h5>
      <hr />
      <div className="client-buttons">
        <button>button 1</button>
        <button>button 2</button>
        <button>button 3</button>
      </div>
      <div className="client-inputs">
        <input type="search" />
        <select name="" id="" />
        <select name="" id="" />
        <input type="search" />
      </div>
    </div>
  );
};

export default Head;
