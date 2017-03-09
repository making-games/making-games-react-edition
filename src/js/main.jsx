import React, { Component } from "react"
import { render, Stage } from "react-pixi"

import AnimatedPlayer from "./components/player"

const Game = (props) => {
  return (
    <Stage width={props.w} height={props.h}>
      <AnimatedPlayer startX={props.w / 2} startY={props.h / 2} />
    </Stage>
  )
}

render(
  <Game
    w={window.innerWidth}
    h={window.innerHeight}
  />,
  document.querySelector(".stage")
)
