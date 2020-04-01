import styled from 'styled-components';

import mail from '../../Assets/svg/email.svg';

const Form = styled.form`
    position: relative;
    display: grid;
    grid-gap: 25px;
    justify-items: center;
    padding-top: 7rem; 

  @media (min-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
       }
       
    &:before {
        content: '';
        position: absolute;
        background-image: url(${mail});
        filter: invert(1);
        width: 7rem;
        height: 7rem;
        left: 50%;
        top: -15px;
        transform: translateX(-50%); 
    }
    
    h3{
        font-size: 3.2rem;
        color:var(--white);
        grid-column: 1/-1;
        margin: 0;
        text-align: center;
        line-height: 1;
    }
    
    p{
        grid-column: 1/-1;
        width: 100%;
        text-align: center;
        color:var(--secondary);
    }
    
    img{
        filter: var(--filter-shadow);
        border-radius: 15px;
        background: linear-gradient( 45deg, var(--primary) 0%, var(--primary-darker) 100% );
        grid-column: 1/-1;
        width: 60px;
    }
`

const Button = styled.button`

    border-radius: 15px;
    background: white;
    border: none;
    padding: 0.8rem 1.2rem;
    font-weight: 800;
    box-shadow: ${props => props.valid ?`0 0 15px 7px rgba(255, 255, 255, 0.15);` : `var(--shadow);`}
    grid-column: 1/-1;
    font-size: 1.8rem;
    transition: all 200ms ease-in-out;
     }
    
     
  @media (min-width: 768px) {
      font-size: 2.4rem;
      padding: 1.2rem 1.5rem;
       } 
  &:hover, &:focus {
    ${props => (!props.valid !== null && !props.valid) ? `animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
  perspective: 1000px;
  `:
  `transform: scale(1.08);`
    }
    
    @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
`

export {Form, Button};