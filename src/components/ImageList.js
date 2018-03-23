import React, { Component } from "react";
import Image from "./Image"
import imageData from "./imageData.json";

class ImageList extends React.Component{
    state = {
            clicked: [],
        }

    
    validateImage = (event) => {
        console.log("test")
        this.imageData.forEach(imageItem => {
            if (this.imageItem.key !== this.state.clicked) {
                this.state.clicked.push(this.imageItem.id)
            }
        })
    }   


validateImage = (id) => {
    console.log("test")
    this.state.clicked.map((clickedItem) => {
        if (clickedItem === id) {
            this.highscoreHandler();
        }
    })
  }
  

render() {
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