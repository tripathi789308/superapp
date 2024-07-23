import React, { Component } from "react";

class TileViewModel extends Component {
  constructor(props) {
    super(props);
  }

  onChangeColor = () => {
    if (this.props.focused) return;
    this.props.setFocus(this.props.x, this.props.y);
  };

  getColor() {
    if (this.props.constant) return "salmon";
    if (this.props.focused) {
      return "teal";
    } else {
      return "transparent";
    }
  }

  render() {
    var hoffset = this.props.screen.width / 2 - (this.props.size * 9) / 2;
    var voffset = this.props.screen.height / 2 - (this.props.size * 9) / 2;
    var headerOffset = 10;

    var style = {
      position: "absolute",
      top: this.props.size * this.props.y + voffset + headerOffset + "px",
      left: this.props.size * this.props.x + hoffset + "px",
      width: this.props.size + "px",
      height: this.props.size + "px",
      background: this.getColor(),
      textAlign: "center",
      verticalAlign: "middle",
      lineHeight: this.props.size + "px",
      fontSize: this.props.size * 0.8 + "px",
      border: "solid 1px white",
    };

    if (this.props.model.isConstant(this.props.x, this.props.y)) {
      return (
        <div style={style}>
          {this.props.number !== 0 ? this.props.number : ""}
        </div>
      );
    } else {
      return (
        <div style={style} onClick={this.onChangeColor}>
          {this.props.number !== 0 ? this.props.number : ""}
        </div>
      );
    }
  }
}

export default TileViewModel;
