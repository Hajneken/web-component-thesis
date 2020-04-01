import React, { useEffect, useRef } from "react";
import { InputWrapper, Error } from "./styled";

const Input = props => {
  
  const formFieldRef = useRef();


  return (
    <InputWrapper
      element={props.element}
      valid={props.valid}
      focus={props.focused === formFieldRef.current}
      inputValue={props.inputValue}
    >
      {props.element === "input" && (
        <input
          id={props.id}
          name={props.name}
          ref={formFieldRef}
          value={props.inputValue}
          type={!!props.type ? props.type : "text"}
          onChange={props.onChangeValue}
          onFocus={props.onInputFocus}
          onBlur={props.onInputBlur}
          maxLength={props.maxChars}
          minLength={props.minChars}
          required
        />
      )}

      {props.element === "textarea" && (
        <textarea
          id={props.id}
          ref={formFieldRef}
          value={props.inputValue}
          name={!!props.name ? props.name : props.id}
          onChange={props.onChangeValue}
          onFocus={props.onInputFocus}
          onBlur={props.onInputBlur}
          maxLength={props.maxChars}
          minLength={props.minChars}
          required
        />
      )}
      <label htmlFor={props.id}>
      {props.children}
      </label>
      {props.valid !== null && !props.valid && props.inputValue !== "" && 
      <Error>{props.errorMsg || `Pole musí obsahovat ${props.minChars} až ${props.maxChars} znaků.` }</Error>}
    </InputWrapper>
  );
};

export default Input;
