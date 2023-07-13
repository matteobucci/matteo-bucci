import { TypeAnimation } from "react-type-animation";
import React from "react";

export const TypingIntroduction = () => {
  return (
    <TypeAnimation
      sequence={[
        "I am a Software Engineer",
        1500,
        "I am a Startup Founder",
        1000,
        "I am a maker",
        500,
        "I am a learner",
        100,
        "I am slightly uncomfortable with this introduction but it looks cool and I really wanted to give it a try",
        100,
        "I am Matteo",
        1000,
        "I am Matteo Bucci",
        5000,
      ]}
      wrapper="h2"
      speed={60}
    />
  );
};