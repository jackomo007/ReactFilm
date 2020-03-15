import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./astronaut.json";

export default class Principal extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="animation-top">
        <Lottie options={defaultOptions} width="300px" height="300px" />
      </div>
    );
  }
}
