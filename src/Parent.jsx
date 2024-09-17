import React from "react";
import styled from "styled-components";
import Child from "./Child";

const Parent = ({ user }) => {
  // const { user } = props; destructuring can be done in this wayt if we pass props in parent instead of user
  const { name , age } = user ;
  return (
    <Wrapper>
      <h2>Parent Comp</h2>
      {/* My name is {name} and my age is {age} .
      <Child  {...user}/> */}
      <Child />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  font-size: 3.2rem;
`;

export default Parent;
