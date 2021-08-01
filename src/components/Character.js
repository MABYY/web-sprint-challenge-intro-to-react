// Write your Character component here
import React from 'react';
import styled from 'styled-components';


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

const DivFilms= styled.div`
display: flex;
`;

const UlFilms= styled.ul`

boder: solid; 
boder-color: black;
`;

const H2= styled.h2`
margin-right: 2em; 
:hover {
  transform: scale(1.2);
  color: red
}
`;

const LI= styled.li`
list-style-type: circle;
`;



const Character = ({characters}) => {
    console.log('characters',characters)
  return (
    <>
      <div>
        {characters.map((item,index) => (
          <Card key ={index}>
            <H1>{item.name}</H1>
            <DivFilms>
              <H2>Films</H2>
              <ul>
                {item.films.map((film,ix)=>{
                  return <LI key={ix}>{film}</LI>
                })}
              </ul>
            </DivFilms>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Character;
