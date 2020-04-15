import styled from "styled-components";

const transition = `all 250ms ease-in-out`;

const NavigationLink = styled.a`
    padding: 0 0.8rem;
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: space-evenly;
    text-transform: uppercase;
    text-align: center;
    height: 100%;
    text-decoration: none;
    color: ${props => props.active ? 'var(--secondary)' : 'var(--black)'};
    font-weight: 700;
    transition: ${transition};
    box-shadow: 0 0 10px 7px rgba(89,128,205,0.15);
    
    
    
    @media (min-width: 768px) {
     &:first-child{
        grid-column: 2/3; 
     }   
     &:last-child{
        grid-column: -2/-3;
     }
    }
    
    &:not(:last-child){
        border-right: 1px solid #98b7f4;
    }
    
    &:before{
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: ${props => props.active ? 0 : 1};
      z-index: 1;  
      background: linear-gradient( 180deg,#ffffff 0%,#eef0f4 100%);
    }
    
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: ${props => props.active ? 1 : 0};
      z-index: 2;
      background: linear-gradient(
        180deg,
        var(--primary) 0%,
        var(--primary-darker) 100%
      );
    }
    
    &:hover {
        animation: bounce 150ms; 
        background: transparent;
        color: var(--secondary);
        &:after {
          opacity: 1;
        }
        &:before{
          opacity: 0;
        }
        .svg-icon {
          fill: var(--secondary);
          animation: bounce 150ms;
        }
      }
      
    
    .svg-icon { 
      fill: ${props => props.active ? 'var(--secondary)' : 'var(--primary)'};
      height: 45%;
      z-index: 3;
    }
    
    span{
        z-index: 3;
    }

  
  @keyframes bounce {
  0% {
    transform: scale(1); }
  50% {
    transform: scale(1.09); }
  100% {
    transform: scale(1); } 
    }
`

const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 65px;
  box-shadow: var(--shadow-color);
  opacity: 0;

  @media (min-width: 768px) {
    grid-template-columns: 4fr repeat(4, 100px) 1fr;
    box-shadow: unset;
  }
`;

export { Nav, NavigationLink};
