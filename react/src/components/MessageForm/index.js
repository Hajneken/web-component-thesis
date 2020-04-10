import React, { useState } from "react";
import { Form, Button } from "./styled";
import Input from "./Input";

import submittedSVG from "../../Assets/svg/submitted.svg";

const MessageForm = (props) => {
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
  

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (formValid){
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", "email":inputEmailValue, "subject":inputSubjectValue, "message":inputTextValue })
        })
          .then(() => setSubmitted(true))
          .catch(error => alert(error));
    }
  };

  const validateForm = () => {
    setFormValid(inputEmailValid && inputSubjectValid && inputTextValid);
  };

  const handleChange = (e) => {
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
    // const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setInputEmailValid(mailFormat.test(e.target.value));
    validateForm();
  };

  const validateText = (e, criteria) => {
    e.target.name === 'subject' && setInputSubjectValid(
      (inputSubjectValue.length >= criteria.minChars) 
      &&
      (inputSubjectValue.length <= criteria.maxChars));
    
    e.target.name === 'message' && setInputTextValid(
      (inputTextValue.length >= criteria.minChars)
      &&
      (inputTextValue.length <= criteria.maxChars));
    validateForm();
  };
  
  const handleFocus = e => {
    setFocused(e.target);
  }

//   when leaving input make validation
  const handleBlur = (e, criteria) => {
    switch (e.target.name) {
      case "email":
        validateEmail(e);
        break;
      case "subject":
        validateText(e, criteria);
        break;
      case "message":
        validateText(e, criteria);
        break;
      default:
        console.log(e.target)
        break;
    }
    
    validateForm();
  };

  return (
    <Form onSubmit={handleSubmit}
     data-netlify="true">
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
            e-mail *
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
            minChars={4}
            maxChars={40}
          >
            Předmět zprávy *
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
            Vaše zpráva *
          </Input>
          <div className="form__terms">
            <span>Odesláním souhlasíte se{' '}</span>
            <button
                style={{fontSize:'1.6rem'}}
                className="link"
                type="button"
                onFocus={validateForm}
                aria-label="Otevřít modální dialogové okno s podmínkami"
                onClick={props.openModal}>zpracováním osobních údajů.</button>
          </div>
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
