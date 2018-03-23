import React from "react";
import Image from "../Image"

class ImageList extends React.Component{

    state = {
            clicked: [],
        }


validateImage = event => {
    console.log("test")
    this.state.clicked.includes((id) => {
          return  this.props.highscoreHandler();
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