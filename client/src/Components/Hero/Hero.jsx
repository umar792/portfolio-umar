import React from "react";
import "../../Styles/Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  // const handleType = (count: number) => {
  //     // access word count number
  //     console.log(count)}
  //   }

  //   const handleDone = () => {
  //     console.log(`Done after 5 loops!`)
  //   }
  return (
    <div className="hero">
      <div className="hero_box">
        <h2>
          Welcome to <font>CodingGame</font>
        </h2>
        <p>
          I am a{" "}
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </p>
        <p>
          Experienced MERN stack developer adept at creating robust and
          interactive web applications. Proficient in leveraging MongoDB,
          Express.js, React, and Node.js to build seamless user interfaces and
          dynamic functionality. Passionate about clean code and optimal
          performance. Strong collaborator with a track record of delivering
          results in cross-functional teams. Let's transform your ideas into
          impactful digital solutions
        </p>
        <div>
          <button className="whitebtn">Hire me</button>
          <button className="whitebtn">Explore Blog</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;