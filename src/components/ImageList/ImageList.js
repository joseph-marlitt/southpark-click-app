import React from "react";
import Image from "../Image"
// import imageData from "./imageData.json";

class ImageList extends React.Component{

    state = {
            clicked: [],
        }


validateImage = (id) => {
    console.log("test")
    this.state.clicked.map((clickedItem) => {
        if (clickedItem === id) {
          return  this.highscoreHandler();
        }
    })
  }
  

render(props) {
    return (
            this.props.imageData.map((oneImage)=> {
            return <Image
            name={oneImage.name}
            imageSrc={oneImage.imageSrc}
            key={oneImage.id}
            id= {oneImage.id}
            onClick={(onClick) => {this.validateImage(oneImage.id).bind(this)}} />
        })
    )}  
};

export default ImageList;