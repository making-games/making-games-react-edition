import React from "react"
import { render, Stage, Text } from "react-pixi"

const Game = (props) => {
  return (
    <Stage width={props.w} height={props.h}>
      <Text text="hello world" x={props.x} y={props.y} />
    </Stage>
  )
}

render(
  <Game
    w={window.innerWidth}
    h={window.innerHeight}
    x={50} y={50}
  />,
  document.querySelector(".stage")
)
