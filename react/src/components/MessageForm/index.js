import React, { useState } from "react";
import {Form, Button} from './styled';

import Input from './Input';

import submittedSVG from "../../Assets/svg/submitted.svg";

const MessageForm = () => {
    
    // Jednoduchý formulář 
    // 1. 2 inputy - email, předmět
    // 2. textarea - samotný text 
    // 3. button - submit 
    //  ?captcha? 
    // 
    // https://docs.netlify.com/forms/notifications/
    //  sent from formresponses@netlify.com
    
    // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form
    
    const [submitted, setSubmitted] = useState(false);
    const [valid , setValid] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(!submitted);
    }
    
    // handleSubmit = e => {
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: encode({ "form-name": "contact", ...this.state })
    //     })
    //       .then(() => alert("Success!"))
    //       .catch(error => alert(error));
  
    //     e.preventDefault();
    //   };

    return (
        <Form action="#" onSubmit={handleSubmit} method="POST" data-netlify="true">
    
           { !submitted ? <>
           <Input element="input" type="email">e-mail</Input>
           <Input element="input">Předmět zprávy</Input>
           <Input element="textarea">Vaše zpráva</Input>
           <p>Odesláním souhlasíte se <a>zpracováním osobních údajů</a>.</p>
           <Button>Odeslat</Button>
            </>
            :
            <>
            <h3>Děkujeme Vám za zprávu!</h3>
            <img src={submittedSVG} alt=""/>
            <p>Brzy se Vám ozveme</p>
            </>
            }
        </Form>
        )
}

export default MessageForm;

