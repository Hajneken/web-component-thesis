import styled from "styled-components";


import transitionTop from '../../Assets/svg/transition-top.svg'
import contactTop from '../../Assets/svg/contact-top.svg'
import contactBottom from '../../Assets/svg/contact-bottom.svg'

const handleBackground = (id) => {
    switch(id){
        // case 'home':
        //     return `background-image: url(${hero});
        //     `;
        case 'hours':
            return `
            background-image: url(${transitionTop});
            left: -1%;
            right: -1%;
            width: 102%;
            `;
        case 'contact':
            return  handlePseudo(id);
    }
}

const handlePseudo = (id) => {
    switch(id) {
        case 'contact':
            return(`
            &:before{
             background: url(${contactTop});
             filter: brightness(0.961);
             }
             
             &:after{
             background: url(${contactBottom});
             filter: brightness(0.961);
             }`);
    }
}

export const Section = styled.section`

&.p-section{
 height: 100vh;
}

  ${props => handleBackground(props.id)}


  `

