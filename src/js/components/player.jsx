import React, { Component } from "react"
import { Sprite } from "react-pixi"

import Animated from "../decorators/animated"

const image = (name) => {
  return "../img/" + name
}

class Player extends Component {
  constructor(...params) {
    super(...params)

    this.state = {
      "x": this.props.startX,
      "y": this.props.startY
    }
  }

  animate() {
    let nextX = this.state.x + 10

    if (nextX > window.innerWidth) {
      nextX = 0
    }

    this.setState({
      "x": nextX
    })
  }

  render() {
    return (
      <Sprite
        image={image("player-idle.png")}
        x={this.state.x} y={this.state.y}
        width={44} height={56}
      />
    )
  }
}

export default Animated(Player)
