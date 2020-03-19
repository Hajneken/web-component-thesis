import styled from "styled-components";

const transition = `all 250ms ease-in-out`;

const Nav = styled.nav`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 65px;
  box-shadow: var(--shadow-color);

  @media (min-width: 768px) {
    grid-template-columns: 4fr repeat(4, 100px) 1fr;
    box-shadow: unset;
  }

  .nav__link {
    padding: 0 0.8rem;
    position: relative;
    display: flex;    
    flex-direction: column;
    justify-content: space-evenly;
    text-transform: uppercase;
    text-align: center;
    height: 100%;
    text-decoration: none;
    color: var(--black);
    font-weight: 700;
    transition: ${transition};
    filter: drop-shadow(0px 0px 8px rgba(0,0,0,0.15));
    
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
      opacity: 1;
      z-index: -1;  
      background: linear-gradient( 180deg,#ffffff 0%,#eef0f4 100% );
    }
    
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: -1;
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
        
        .nav__link,
        .svg-icon {
          fill: var(--secondary);
          animation: bounce 150ms;
        }
      }

    .svg-icon { 
      fill: var(--primary);
      height: 45%;
    }

  }
  
  @keyframes bounce {
  0% {
    transform: scale(1); }
  50% {
    transform: scale(1.09); }
  100% {
    transform: scale(1); } 
    }
`;

export { Nav };
