import React, { useState, useEffect } from "react";
import { StyledInput } from "./styled";

const Input = props => {
  const [valid, setValid] = useState(null);
  const [empty, setEmpty] = useState(true);
  
  const [focused, setFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  
  useEffect(()=>{
      console.log('valid ',valid)
  })


  const handleFocus = () => {
    setFocused(!focused);
  };

  const handleChange = e => {
    setInputValue(e.target.value);
    e.target.value !== "" ? setEmpty(false) : setEmpty(true);
  };
  
  const handleBlur = e => {
    setFocused(!focused);
    switch(props.type) {
        case "email":
            validateEmail(e);
          break;
        case "text":
            validateText();
          break;
        default:
            break;
      } 
  }
  
  const validateEmail = () => {
      //   https://www.w3resource.com/javascript/form/email-validation.php
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setValid(mailFormat.test(inputValue));
  }
  
  const validateText = () => {
    const textFormat = /^[0-9a-zA-Z]+$/;
    setValid(textFormat.test());
}

  return (
    <StyledInput element={props.element} focus={focused} empty={empty} valid={valid}>
      {props.element === "input" && (
        <input
          id={props.id}
          name={props.name}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={!!props.type ? props.type : "text"}
          required
        />
      )}

      {props.element === "textarea" && (
        <textarea
          id={props.id}
          value={inputValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          name={!!props.name ? props.name : props.id}
          required
        />
      )}

      <label htmlFor={props.id}>{props.children}</label>
    </StyledInput>
  );
};

export default Input;
