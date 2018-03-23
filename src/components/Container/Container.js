import React, { Component } from "react";
import imageData from "../../imageData.json";
import ImageList from "../ImageList";
import Wrapper from "../Wrapper"

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

shuffleImages() {

}

  render() {
      return (
        <Wrapper>
        <div className="scoreboard"></div>
        <div className="container">
          <ImageList imageData={imageData} 
          highscoreHandler={this.highscoreHandler.bind(this)}
          resetScore= {this.resetScore.bind(this)}
          />
        </div>  
        </Wrapper>
      )}
}
  


export default Container;
