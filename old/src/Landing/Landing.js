/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Landing.css';
import Avatar from 'avataaars';

function Landing() {
  const [expression, setExpression] = useState({
    eyes: 'Happy',
    mouth: 'Smile',
  });
  return (
    <header
      className="landing"

      // Toggle between happy and shocked expression based on user interactions
      onClick={() => setExpression({
        eyes: expression.eyes === 'Happy' ? 'Surprised' : 'Happy',
        mouth: expression.mouth === 'Smile' ? 'ScreamOpen' : 'Smile',
      })}
      onMouseEnter={() => window.innerWidth > 900 && setExpression({
        eyes: expression.eyes === 'Happy' ? 'Surprised' : 'Happy',
        mouth: expression.mouth === 'Smile' ? 'ScreamOpen' : 'Smile',
      })}
      onMouseLeave={() => window.innerWidth > 900 && setExpression({
        eyes: expression.eyes === 'Happy' ? 'Surprised' : 'Happy',
        mouth: expression.mouth === 'Smile' ? 'ScreamOpen' : 'Smile',
      })}
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
  );
}

export default Landing;
