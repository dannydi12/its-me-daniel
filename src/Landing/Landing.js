import React from 'react';
import './Landing.css';
import Avatar from 'avataaars';

function Landing() {
  return (
    <header className='landing'>
      <div className='landing-container'>
        <h1>Hi, it's me. Daniel.</h1>
        {/* <p>I'm a web developer</p> */}
      </div>
      <Avatar
        avatarStyle='Transparent'
        topType='ShortHairShortWaved'
        accessoriesType='Blank'
        hairColor='Brown'
        facialHairType='Blank'
        clotheType='Hoodie'
        clotheColor='Blue03'
        eyeType='Happy'
        eyebrowType='DefaultNatural'
        mouthType='Smile'
        skinColor='Light'
      />
    </header>
  );
}

export default Landing;