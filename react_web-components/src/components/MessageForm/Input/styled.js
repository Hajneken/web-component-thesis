import styled from "styled-components";

const InputWrapper = styled.div`
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
  
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus{
      border-radius: 15px;
  }
  
  &:after{
    content: '';
    position: absolute;
    left:-1px;
    bottom:0;
    width: calc(100% + 2px);
    height: calc(100% - 5px);
    background: transparent;
    border-radius: 15px;    
    pointer-events: none;
    transition: all 150ms ease-in-out;
    
    transform: ${props => (props.focus || props.inputValue !== "") ? `scaleX(1);` : `scaleX(0);`} ;
    
    border-bottom: 5px solid var(--primary-darker); 
    ${props => props.valid && `border-bottom: 5px solid #28a745;` } 
    ${props => props.valid !== null && !props.valid && `border-bottom: 5px solid #cc0000;` } 
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
    ${'' /* ${props => props.valid && `color: #28a745;` }  */}
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
    
    ${props => (props.focus || props.inputValue !== "") && props.element === 'input' &&`
    transform: translateY(-250%);
    color: white;
    font-size: 1.2rem;
    `
    }
    
    ${props => (props.focus || props.inputValue !== "") && props.element === 'textarea' && `
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
    min-height: 200px;
    resize:vertical;
  }
`;

const Error = styled.div`
    position: absolute;
    z-index: 10;
    padding: 0.5rem;
    font-size: 1.4rem;
    bottom:calc(100% + 2rem);
    color: #cc0000;
    font-weight: bold;
    background: white;
    margin-left: auto;
    border-radius: 10px;
    width: 80%;
    text-align:center;
    box-shadow: var(--shadow-color);
    left: 50%;
    transform: translateX(-50%);
    animation: appear 250ms ease-out;
    
    
    &:before{
      content: '';
      position: absolute;
      z-index: 0;
      width:0;
      height: 0;
      border-top: 15px solid var(--secondary);
      border-bottom:10px solid transparent;
      border-left:10px solid transparent;
      border-right:10px solid transparent;
      bottom: -25px;
      left:50%;
      transform: translateX(-50%);
    }
    
    
    @keyframes appear{
      0%{
        opacity: 0;
        transform: translate(-50%,0) scale(0.8);
      }
      
      50%{
        transform: translate(-50%,0) scale(1.1);
      }
      
      100%{
        opacity: 1;
        transform: translate(-50%,0) scale(1);
      }
    }
`
export { InputWrapper, Error };
