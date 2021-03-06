import React, { Component } from "react";
import imageData from "../../imageData.json";
import ImageList from "../ImageList";

class Container extends Component {
  state = {
    imageData,
    score: 0,
    highscore: 0
  }

  shuffleImages(ImageArray) {
    for (let i = ImageArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ImageArray[i], ImageArray[j]] = [ImageArray[j], ImageArray[i]];
    }
    return ImageArray;
  }

  render() {
      return (
        <div className="container-fluid">
          <ImageList 
          imageData={this.shuffleImages(imageData)} 
          shuffleImages= {this.shuffleImages.bind(this)}
          />
        </div>  
      )}
  }

export default Container;
