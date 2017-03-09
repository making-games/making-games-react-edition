import React, { Component } from "react"

const Animated = (Composed) => {
  return class extends Component {
    constructor(...params) {
      super(...params)
      this.addAnimation = this.addAnimation.bind(this)
    }

    componentDidMount() {
      this.addAnimation()
    }

    componentWillUnmount() {
      this.removeAnimation()
    }

    addAnimation() {
      this.animation = requestAnimationFrame(
        this.addAnimation
      )

      this.refs.composed.animate()
    }

    removeAnimation() {
      cancelAnimationFrame(this.animation)
    }

    render() {
      return (
        <Composed ref="composed" {...this.props} />
      )
    }
  }
}

export default Animated
