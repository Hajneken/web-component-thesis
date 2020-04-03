import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

import { Backdrop } from "./styled";

//SVG
import close from "../../Assets/svg/close.svg";

const Modal = props => {

    // element triggering modal
    const [previousActiveElement, setPreviousActiveElement] = useState(null);
    // element on focus
    const [currentFocus, setCurrentFocus] = useState(null);

    let closingRef = useRef();
    let agreeRef = useRef();
    let backdropRef = useRef(null);

    useEffect(() => {
        (!!currentFocus) && currentFocus.current.focus();
        console.log('currentFocus: ', currentFocus)
    },[currentFocus])

    //   When opened prevent background scroll and
    //   reference the previous active element to return
    //   and focus
    useEffect(() => {
        if (!!props.opened) {
            document.body.style.overflow = "hidden";
            setPreviousActiveElement(props.openedBy);
            setCurrentFocus(closingRef);
        } else {
            document.body.style.overflow = "";
            setCurrentFocus(null);
            previousActiveElement && previousActiveElement.focus()
        }

        // animate in
        props.opened && gsap.fromTo(
            backdropRef,
            { opacity: 0, y: "100%" },
            { opacity: 1, y: 0, ease: "power4.out", duration: 0.3 });

            !props.opened && gsap.to(
            backdropRef,
            { opacity: 0, y: "-100%", ease: "power4.in", duration: 0.3 }
            );


    }, [props.opened, props.openedBy, previousActiveElement])


  const handleKeyPress = e => {
      if (e.shiftKey){
          switch(e.key) {
              case "Escape":
                  props.closeMethod(e)
                  break;
              case "Tab":
                  handleTabPrev(e);
                  break;
              default:
                  break;
          }
      } else {
          switch(e.key) {
              case "Escape":
                  props.closeMethod(e)
                  break;
              case "Tab":
                  handleTabNext(e);
                  break;
              default:
                  break;
          }
      }
  };

  const handleTabNext = e => {
      if(e.currentTarget === agreeRef.current){
          setCurrentFocus(closingRef);
          e.preventDefault();

      }
    }

    const handleTabPrev = e => {
        if(e.currentTarget === closingRef.current){
            setCurrentFocus(agreeRef);
            e.preventDefault();
        }
    }


  return (
    <>
    <Backdrop ref={el => backdropRef = el}
              opened={props.opened}
              >
          <div aria-hidden={!props.opened}
               role="dialog"
               className="content">
          <button
              type="button"
              className="close"
              onClick={props.closeMethod}
              aria-label="Zavřít"
              onKeyDown={handleKeyPress}
              tabIndex={!props.opened ? -1 : 0}
              ref={closingRef}
            >
                <img src={close} alt="" />
            </button>
              <div onKeyDown={handleKeyPress}>
                  {props.children}
              </div>
                  {props.agreeBtn &&
                  <button
                      ref={agreeRef}
                      className="agree"
                      type="button"
                      onKeyDown={handleKeyPress}
                      onClick={props.closeMethod}
                      tabIndex={!props.opened ? -1 : 0}
                      >
                      {props.agreeBtnLabel || 'Zavřít'}
                  </button>
              }
          </div>
      </Backdrop>      
    </>
  );
};

export default Modal;
