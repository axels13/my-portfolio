import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      className="type"
      options={{
        strings: ["Frontend React developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
