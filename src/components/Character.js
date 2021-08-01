// Write your Character component here
import React from 'react';
import styled from 'styled-components';

import Films from './Films.js'


const Card = styled.div`
font-family: Georgia;
line-height: 2em;
padding: 1em;
border-style:dotted;
`;

const H1= styled.h1`
:hover {
  transform: scale(1.5);
  color: blue
}
`;



const Character = ({characters}) => {
    console.log('characters',characters)
  return (
    <>
      <div>
        {characters.map((item,index) => (
          <Card key ={index}>
            <H1>{item.name}</H1>
            <Films films ={item.films}/>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Character;
