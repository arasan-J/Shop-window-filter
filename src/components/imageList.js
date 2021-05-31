import React from "react";
import imageListData from '../data/windowData';
import "../styles/imageList.css";



function ImageList({ filterList }) {
  const list = [...filterList]; //['front','right','left','back']
  console.log(list);
  return (
    <div className="imageListContainer">
      {list.length > 0 ? (
        list.map((item) => (
          <div className="imageContainer">
            <div>
              <img
                className="imageStyle"
                src={imageListData[item].image}
                alt={item.name}
              />
            </div>
            <div className="title">{imageListData[item].name}</div>
          </div>
        ))
      ) : (
        <div className="message">Please select any window</div>
      )}
    </div>
  );
}

export default ImageList;
