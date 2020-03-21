import styled from "styled-components";


export const StyledGallery = styled.div`

.gallery__img{
  &:hover, &:focus{
    box-shadow: 0 0 7px 7px rgba(89, 128, 205, 0.5);  
  }
}

.gallery__fullscreen{
            z-index: 1000;
            position: fixed;
            top: 0;
            left: 0;
            transform: translate3d(100%, 0, 0);
            height: 100%;
            width: 100%;
            background: rgba(0,0,0,0.7);
            
            .gallery__img-wrap{
              box-shadow: var(--shadow-color);
              position: absolute;
              left: 50%;
              top: 45%;
              transform: translate(-50%, -50%);
              border-radius: 15px;
              opacity: 1;
              height: fit-content;
              width: 88vw;
              background: linear-gradient(3deg,var(--primary) 0%,#ffffff 100%);
              display: flex;
              justify-content: center;
              
            }
            
            .gallery__img-fs{
            height: auto;
            width: 88vw;
            max-height: 80vh;
            object-fit: contain;
            border-radius: 15px;
            }
            
            .img__count{
              position:absolute;
              right: 0;
              top: 100%;
              color: var(--white);
              font-size: 1.4rem;
            }
            
            .img__label{
              position:absolute;
              left: 0;
              top: 100%;
              color: var(--white);
              margin-top: 0.4rem;
              font-size: 1.2rem;
              &:after{
                  position: absolute;
                  content: "";
                  width: 30px;
                  height: 4px;
                  left: 0;
                  bottom: -1rem;
                  background: linear-gradient(90deg,var(--primary) 0%,var(--primary-darker) 100%);
                  border-radius: 5px;
              }
              @media only screen and (min-width: 600px) {
              font-size: 1.6rem;
              }
            }
            
            .left{
            left: 0;
            top: 50%;
            transform: translateY(-50%) rotate(180deg);
            }
            
            .right{
            right: 0;
            top: 50%;
            transform: translateY(-50%);
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
            
            img{
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
       }
       
       
            
`


