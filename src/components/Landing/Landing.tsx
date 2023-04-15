import React, { FC, useState } from "react";
import styles from "./Landing.styled";
import Avatar from "avataaars";

const Landing: FC = () => {
  const [expression, setExpression] = useState({
    eyes: "Happy",
    mouth: "Smile",
  });

  const toggleEmotion = () => {
    setExpression({
      eyes: expression.eyes === "Happy" ? "Surprised" : "Happy",
      mouth: expression.mouth === "Smile" ? "ScreamOpen" : "Smile",
    });
  };

  return (
    <>
      <header
        className="landing"
        // Toggle between happy and shocked expression based on user interactions
        onClick={toggleEmotion}
        onMouseEnter={() => window.innerWidth > 900 && toggleEmotion()}
        onMouseLeave={() => window.innerWidth > 900 && toggleEmotion()}
      >
        <div className="landing-container">
          <h1>Hi, it's me. Daniel.</h1>
        </div>
        <Avatar
          avatarStyle="Transparent"
          topType="ShortHairShortWaved"
          accessoriesType="Blank"
          hairColor="Brown"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="Blue03"
          eyeType={expression.eyes}
          eyebrowType="DefaultNatural"
          mouthType={expression.mouth}
          skinColor="Light"
        />
      </header>
      <style jsx>{styles}</style>
    </>
  );
};

export default Landing;
