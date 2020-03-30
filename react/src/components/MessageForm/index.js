import React, { useState, useEffect } from "react";
import { Form, Button } from "./styled";

import Input from "./Input";

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

  // form states
  const [submitted, setSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(false);
  // inputvalidity states
  const [inputEmailValid, setInputEmailValid] = useState(null);
  const [inputSubjectValid, setInputSubjectValid] = useState(null);
  const [inputTextValid, setInputTextValid] = useState(null);
  // input values
  const [inputEmailValue, setInputEmailValue] = useState("");
  const [inputSubjectValue, setInputSubjectValue] = useState("");
  const [inputTextValue, setInputTextValue] = useState("");

  useEffect(() => {
    console.log(inputEmailValue);
  });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(!submitted);
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
    setFormValid(true);
  };

  const handleChange = e => {
    switch (e.target.name) {
      case "email":
        setInputEmailValue(e.target.value);
        console.log("email: ", e.target.value);
        break;
      case "subject":
        setInputSubjectValue(e.target.value);
        console.log("subject: ", e.target.value);
        break;
      case "message":
        setInputTextValue(e.target.value);
        console.log("message: ", e.target.value);
        break;
      default:
        break;
    }
  };

  const validateEmail = e => {
    //   https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setInputEmailValid(mailFormat.test(e.currentTarget));
  };

  const validateText = e => {
    const textFormat = /^[0-9a-zA-Z]+$/;
    setInputSubjectValid(textFormat.test(e.currentTarget));
  };

//   when leaving input make validation
  const handleBlur = e => {
    console.log("blured");
    switch (e.target.name) {
      case "email":
        setInputEmailValue(e.currentTarget);
        break;
      case "subject":
        setInputSubjectValue(e.currentTarget);
        break;
      case "message":
        setInputTextValue(e.currentTarget);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit} data-netlify="true">
      {!submitted ? (
        <>
          {/* Initital focus is default = blue, invalid by passing props */}
          <Input
            id="nameInput"
            element="input"
            type="email"
            name="email"
            value={inputEmailValue}
            onChangeValue={handleChange}
            onBlur={handleBlur}
            valid={inputEmailValid}
          >
            e-mail
          </Input>
          <Input
            id="subjectInput"
            element="input"
            name="subject"
            value={inputSubjectValue}
            onChangeValue={handleChange}
            onBlur={handleBlur}
            valid={inputSubjectValid}
          >
            Předmět zprávy
          </Input>
          <Input
            id="messageText"
            name="message"
            element="textarea"
            value={inputTextValue}
            onChangeValue={handleChange}
            onBlur={handleBlur}
            valid={inputTextValid}
          >
            Vaše zpráva
          </Input>
          <p>
            Odesláním souhlasíte se <a>zpracováním osobních údajů</a>.
          </p>
          <Button disabled={!formValid}>Odeslat</Button>
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
