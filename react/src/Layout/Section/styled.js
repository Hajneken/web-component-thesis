import styled from "styled-components";

import hero from '../../Assets/img/zahlavi.png'


import transitionTop from '../../Assets/svg/transition-top.svg'
import contactTop from '../../Assets/svg/contact-top.svg'
import contactBottom from '../../Assets/svg/contact-bottom.svg'

const handleBackground = (id) => {
    switch(id){
        case 'home':
            return `background-image: url(${hero});`;
        case 'hours':
            return `background-image: url(${transitionTop});`;
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
             }
             
             &:after{
             background: url(${contactBottom});
             }`);
    }
}

export const Section = styled.section`

&.p-section{
 height: 100vh;
}

  ${props => handleBackground(props.id)}

  `
