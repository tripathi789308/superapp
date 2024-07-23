import React, { Component } from "react";
import "./App.css";
import BoardViewModel from "./BoardViewModel";

class App extends Component {
  constructor(props) {
    super(props);
  }

  calculatePixels() {
    var min = Math.max(250, Math.min(this.state.width, this.state.height));
    return min / 10;
  }

  getScreen() {
    return {
      width: this.state.width,
      height: this.state.height,
    };
  }

  render() {
    var boardView = (
      <div>
        <div>
          <BoardViewModel
            pixels={this.calculatePixels()}
            screen={this.getScreen()}
          />
        </div>
      </div>
    );

    return boardView;
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}

export default App;
