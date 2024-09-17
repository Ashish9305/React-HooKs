import { useState,useReducer } from "react"; // first import useReducer in top 
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";
import reducer from "./reducer";

const initialValue = 0;

const ReducerHook = () => {
  // const [count, setCount] = useState(0); commenting because we will do by useReducer hooks  

  const [count, dispatch] = useReducer(reducer, initialValue); // here reducer is function

  return (
    <>
      <Wrapper>
        <div className="container"> 
          <button onClick={() => dispatch({ type: "INC" })}>   
          <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={() => dispatch({ type: "DEC" })}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default ReducerHook;


 // dispatch ko call karte waqt hamesha object passs karna hota hai jisme ek property mandatory hota hai type: , aur operation perform hoga inside reduceer (trigger hoga reducer)