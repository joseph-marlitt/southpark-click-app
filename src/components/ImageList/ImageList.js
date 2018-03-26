import React from "react";
import Image from "../Image"

class ImageList extends React.Component{

state = {
        clicked: [],
        score: 0,
        highscore: 0
    }


validateImage = id => {
    
    if (this.state.clicked.includes(id)) {
        this.setState({score: 0});
        this.setState({clicked: []})
    } else {
        this.state.clicked.push(id);
        this.setState({score: this.state.score +1})
    }
}

componentDidUpdate(props) {
    if(this.state.highscore < this.state.score) {
        this.setState({highscore: this.state.score})
        }
    props.shuffleImages(props.imageData)
    console.log("highscore: " + this.state.highscore)
    console.log(this.state.score)
    console.log(this.state.highscore)
    
    }
  

render(props) {
    return (
            this.props.imageData.map((oneImage)=> {
            return <Image
            name={oneImage.name}
            imageSrc={oneImage.imageSrc}
            key={oneImage.id}
            id= {oneImage.id}
            validateImage= {this.validateImage}
            highscoreHandler= {this.highscoreHandler}
            />
        })
    )}  
};

export default ImageList;