import styled from "styled-components";

export const Backdrop = styled.div`
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background: rgba(0,0,0,0.7);
            transform: translate(0, 100%);
            opacity: 0;
            
            a{
            display: ${props => !props.opened ? `none` : `inline`}; 
            }
            
            .content{
                width: 100%;
                position: absolute;
                max-width:800px;
                padding: 2.8rem;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 15px;
                background: linear-gradient(272deg, #b8d0ff 0%,#ffffff 100%);
                top: 5vh;
                height: 90vh;
                overflow-y: scroll;
                scrollbar-width: thin;
                scrollbar-color: blue;
              
            }
            
            button{
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            height: 30px;
            padding: 0.4rem;
            border: none;
            background: linear-gradient(90deg, #6c9af480 0%, #5980cd80 100%);
            border-radius: 15px;
            display: flex;
            justify-content: center;
            transition: all 150ms ease-in-out;
            
            &.agree{
            font-size: 2rem;
            justify-content: center;
            position: relative;
            width: fit-content;
            color: white;
            margin: 0 auto;
            background-color: var(--primary);
            
            }
            
            img{
              background: none;
              width: 80%;
              transition: all 150ms ease-in-out;
              filter: invert(1) drop-shadow( 0 0 10px rgba(0,0,0,0.3));
              }
            
            &:hover, &:focus{
            background-color: var(--primary);
            outline: none;
            box-shadow: 0 0 7px 4px rgba(89,128,205,0.5);
            
            img{
                transform: scale(1.2);
                filter: invert(1); 
            }
            
            }
            
            @media only screen and (min-width: 600px) {
              width: 50px;
              height: 50px;
              padding: 1rem;
             }
            } 
`