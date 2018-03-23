import React, { Component } from "react";
import imageData from "./imageData.json";
import ImageList from "./ImageList"

class Container extends Component {
  state = {
    score: 0,
    highscore: 0
  }


highscoreHandler = () => {
  let guesses = this.state.guesses;
  this.setState({ guesses: this.state.guesses + 1 });
  if (guesses >= this.state.highscore) {
      this.setState({ highscore: guesses});
      console.log(this.state.highscore)
  }
};


resetScore() {

}

  render() {
      return (
        <div className="container">
          <ImageList imageData={imageData} 
          highscoreHandler={this.highscoreHandler.bind(this)}
          resetScore= {this.resetScore.bind(this)}
          />
        </div>  
      )}
}
  


export default Container;
