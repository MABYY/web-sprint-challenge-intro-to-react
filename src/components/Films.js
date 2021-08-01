import React from 'react';
import styled from 'styled-components';

const DivFilms= styled.div`
display: flex;
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

const Films = ({films}) => {
    console.log('films',films)
  return (
    <>
    <DivFilms>
              <H2>Films</H2>
              <ul>
                {films.map((film,ix)=>{
                  return <LI key={ix}>{film}</LI>
                })}
              </ul>
            </DivFilms>
    </>
  );
}

export default Films;
