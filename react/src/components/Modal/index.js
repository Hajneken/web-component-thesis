import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Backdrop, ModalBtn } from "./styled";

//SVG
import close from "../../Assets/svg/close.svg";

const Modal = props => {

    const [previousActiveElement, setPreviousActiveElement] = useState(null);  
  const [opened, setOpened] = useState(false);

  const closeRef = useRef();
  const agreeRef = useRef();
  
  //   When opened prevent background scroll and
  //   reference the previous active element to return
  // and focus 
  useEffect(() => {
    if (!!opened) {
      document.body.style.overflow = "hidden"; 
    } else { 
      document.body.style.overflow = "";
    //   focus back
      previousActiveElement && previousActiveElement.focus()
    }
  }, [opened, previousActiveElement] );
  

  const handleOpen = e => {
    if (!opened) {
      setOpened(!opened);
      gsap.fromTo(
        ".backdrop",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: 0, ease: "power4.out", duration: 0.3 }
      );
    } else {
      handleClose();
    }
  };

  const handleClose = e => {
    setOpened(false);
    gsap.fromTo(
      ".backdrop",
      { opacity: 1, y: 0 },
      { opacity: 0, y: "-100%", ease: "power4.in", duration: 0.3 }
    );
  };

  const handleKeyPress = e => {
    if (!!opened) {
        switch(e.key) {
            case "Escape":
                handleClose();
              break;          
            case "Tab":
                e.preventDefault();
                break;
            default:
                break;
          } 
    } else {
        (e.key === 'Enter') && handleOpen(e);
      }
  };

  return (
    <>
    <ModalBtn type="button" onClick={handleOpen}>{props.label}</ModalBtn>
    <Backdrop className="backdrop"
              aria-hidden={!opened}>
          <div className="content">
          <button
              type="button"  
              onClick={handleClose}
              aria-label="Zavřít"
              tabIndex={!opened ? -1 : 0}
              ref={closeRef}
            >
                <img src={close} alt="" />
            </button>
              {props.children}
          </div>
      </Backdrop>      
    </>
  );
};

export default Modal;
