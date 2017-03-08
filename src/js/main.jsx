import React from "react"
import Pixi from "pixi.js"
import { render, Stage, Text } from "react-pixi"

const Example = (props) => {
  return (
    <Stage width={props.w} height={props.h}>
      <Text text="hello world" x={props.x} y={props.y} />
    </Stage>
  )
}

render(
  <Example w={window.innerWidth} h={window.innerHeight} x={50} y={50} />,
  document.querySelector(".app")
)
