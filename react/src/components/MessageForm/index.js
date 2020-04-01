import React, { useState, useEffect } from "react";
import { Form, Button } from "./styled";

import Modal from '../../components/Modal'
import Input from "./Input";

import Terms from '../../components/Terms'

import submittedSVG from "../../Assets/svg/submitted.svg";

const MessageForm = () => {
  // https://docs.netlify.com/forms/notifications/
  //  sent from formresponses@netlify.com

  // https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#form-handling-with-a-stateful-react-form

  // form states
  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(null);
  
  const [focused, setFocused] = useState(null);
  
  // input validity states
  const [inputEmailValid, setInputEmailValid] = useState(null);
  const [inputSubjectValid, setInputSubjectValid] = useState(null);
  const [inputTextValid, setInputTextValid] = useState(null);
  // input values
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputSubjectValue, setInputSubjectValue] = useState("");
  const [inputTextValue, setInputTextValue] = useState("");
  
  useEffect(()=>{
    console.log()
  })

  const handleSubmit = e => {
    e.preventDefault();
    if (formValid){
      setSubmitted(!submitted);
    }
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: encode({ "form-name": "contact", ...this.state })
    //     })
    //       .then(() => alert("Success!"))
    //       .catch(error => alert(error));

    //     e.preventDefault();
  };

  const validateForm = () => {
    // if valid enable submit button setFormValid(true)
    setFormValid(inputEmailValid && inputSubjectValid && inputTextValid);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case "email":
        setInputEmailValue(e.target.value);
        break;
      case "subject":
        setInputSubjectValue(e.target.value);
        break;
      case "message":
        setInputTextValue(e.target.value);
        break;
      default:
        break;
    }
  };

  const validateEmail = e => {
    //   https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setInputEmailValid(mailFormat.test(e.target.value));
    validateForm();
  };

  const validateText = e => {
    //  TODO 
    // const textFormat = /^[0-9a-zA-Z]+$/;
    // setInputSubjectValid(textFormat.test(value));
    e.target.name === 'subject' && setInputSubjectValid(inputSubjectValue.length >= 2);
    e.target.name === 'message' && setInputTextValid(inputTextValue.length >= 5);
    validateForm();
  };
  
  const handleFocus = e => {
    setFocused(e.target);
  }

//   when leaving input make validation
  const handleBlur = e => {
    switch (e.target.name) {
      case "email":
        validateEmail(e);
        break;
      case "subject":
        validateText(e);
        break;
      case "message":
        validateText(e);
        break;
      default:
        validateText(e);
        break;
    }
    
    validateForm();
  };

  return (
    <Form onSubmit={handleSubmit} data-netlify="true">
      {!submitted ? (
        <>
          <Input
            id="emailInput"
            element="input"
            type="email"
            name="email"
            focused={focused}
            inputValue={inputEmailValue}
            onChangeValue={handleChange}
            onInputBlur={handleBlur}
            onInputFocus={handleFocus}
            valid={inputEmailValid}
            errorMsg={'Musí být ve tvaru nazev@domena.cz'}
          >
            e-mail
          </Input>
          <Input
            id="subjectInput"
            element="input"
            name="subject"
            focused={focused}
            inputValue={inputSubjectValue}
            onChangeValue={handleChange}
            onInputFocus={handleFocus}
            onInputBlur={handleBlur}
            valid={inputSubjectValid}
            minChars={2}
            maxChars={40}
          >
            Předmět zprávy
          </Input>
          <Input
            id="messageText"
            name="message"
            element="textarea"
            focused={focused}
            inputValue={inputTextValue}
            onChangeValue={handleChange}
            onInputFocus={handleFocus}
            onInputBlur={handleBlur}
            valid={inputTextValid}
            minChars={5}
            maxChars={2000}
          >
            Vaše zpráva
          </Input>
          <div style={{gridColumn:'1/-1'}}>
            <p style={{display:'inline'}}>
            Odesláním souhlasíte se{' '}
          </p>
            <Modal label="zpracováním osobních údajů.">
              <Terms />
            </Modal></div>
          <Button
          onMouseOver={validateForm}
          valid={formValid}
          >Odeslat</Button>
        </>
      ) : (
        <>
          <h3>Děkujeme Vám za zprávu!</h3>
          <img src={submittedSVG} alt="" />
          <p>Brzy se Vám ozveme</p>
        </>
      )}
    </Form>
  );
};

export default MessageForm;
