import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./404-space-error.json";

export default class NotFound extends React.Component {
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
      <div>
        <p className="Houston">Houston... we have a problem.</p>
        <Lottie options={defaultOptions} height={400} width={800} />
      </div>
    );
  }
}
