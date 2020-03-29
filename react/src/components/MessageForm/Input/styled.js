import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;
  width: 100%;
  min-height: 44px;
  background: white;
  position: relative;
  width: 100%;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow);
  ${props => props.element === 'textarea' && `grid-column: 1/-1;`}
  
  &:after{
    content: '';
    position: absolute;
    left:-1px;
    bottom:0;
    width: calc(100% + 2px);
    height: calc(100% - 5px);
    background: transparent;
    border-bottom: 5px solid var(--primary-darker); 
    ${props => props.valid && `border-bottom: 5px solid green;` } 
    border-radius: 15px;    
    pointer-events: none;
    transform: ${props => (props.focus || !props.empty) ? `scaleX(1);` : `scaleX(0);`} ;
    transition: all 150ms ease-in-out;
    
    ${props => !props.empty && props.valid !== null && !props.valid && `border-bottom: 5px solid red;` } 
  }

  input {
    width: 100%;
    height: 100%;
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
    background: transparent;
    padding: 1rem 1rem 0.8rem 1.4rem;
    border: none;
    resize: none;
    outline: none;
  }
  
  label{
    position: absolute;
    font-size: 1.4rem;
    color: var(--primary-darker);
    width: calc(100% - 2rem);
    left: 1rem;
    top: 1rem;
    ${props => props.element === 'input' && `
    top: 50%;
    transform: translateY(-50%);
    `}
    transition: all 150ms ease-in-out;
    pointer-events: none;
    
    ${props => (props.focus || !props.empty) && props.element === 'input' &&`
    transform: translateY(-250%);
    color: white;
    font-size: 1.2rem;
    `
    }
    
    ${props => (props.focus || !props.empty) && props.element === 'textarea' && `
    transform: translateY(-3rem);
    color: white;
    font-size: 1.2rem;
    `}
  }
  
  textarea{
    color: black;
    font-size: 1.6rem;
    font-weight: bold;
    border: none;
    background: transparent; 
    outline: none;
    width: 99%;
    padding: 1rem;
    min-height: 200PX;
  }
`;

export { StyledInput };
