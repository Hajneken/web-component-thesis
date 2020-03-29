import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { StyledGallery } from "./styled";

//SVG
import close from "../../Assets/svg/close.svg";
import galleryArrow from "../../Assets/svg/galleryArrow.svg";

const Gallery = props => {
  const imgArr = props.images;

  const [opened, setOpened] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [previousActiveElement, setPreviousActiveElement] = useState(null);
  const [currentFocus, setCurrentFocus] = useState(null);

  const closeRef = useRef();
  const prevRef = useRef();
  const nextRef = useRef(); 
  
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
  
//   only fire when the currentFocus changes 
  useEffect(() => {
    !!currentFocus && currentFocus.current.focus();
  },[currentFocus])

  //   Loop through array of images to find the index of searched image
  const initIndex = target => {
    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i].alt === target.alt) {
          console.log(i);
        return i;
      } else {
      }
    }
  };

  const handleOpen = e => {
    if (!opened) {
      setPreviousActiveElement(e.currentTarget);
      setCurrentIndex(initIndex(e.currentTarget));      
      setOpened(e.currentTarget);
      setCurrentFocus(closeRef);

      gsap.fromTo(
        ".gallery__fullscreen",
        { opacity: 0, x: "100%" },
        { opacity: 1, x: 0, duration: 0.3 }
      );
    } else {
      handleClose();
    }
  };

  const handleClose = e => {
    setOpened(false);
    setCurrentIndex(null);
    setCurrentFocus(null);
    gsap.fromTo(
      ".gallery__fullscreen",
      { opacity: 1, x: 0 },
      { opacity: 0, x: "-100%", ease: "power4.out", duration: 0.25 }
    );
  };

  const handleNext = e => {
    gsap.fromTo(
      ".gallery__img-fs",
      { opacity: 0, x: "100%" },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.5 }
    );
    setCurrentIndex((currentIndex + 1) % imgArr.length);
  };

  const handlePrev = e => {
    gsap.fromTo(
      ".gallery__img-fs",
      { opacity: 0, x: "-100%" },
      { opacity: 1, x: 0, ease: "power4.out", duration: 0.5 }
    );
    setCurrentIndex(
      currentIndex === 0
        ? imgArr.length - 1
        : (currentIndex % imgArr.length) - 1
    );
  };

  const handleKeyPress = e => {
    if (!!opened) {
        switch(e.key) {
            case "Escape":
                handleClose();
              break;
            case "ArrowRight":
                handleNext();
              break;
            case "ArrowLeft":
                handlePrev();
                break;            
            case "Tab":
                handleFocusChange(e);
                break;
            default:
                break;
          } 
    } else {
        (e.key === 'Enter') && handleOpen(e);
      }
  };
  
// prevent deafult action and watch if shift is pressed
  const handleFocusChange = (e) => {
    e.preventDefault();
    if (!e.shiftKey){
        switch(currentFocus){
            case closeRef:
                setCurrentFocus(prevRef);
                break;
            case prevRef:
                setCurrentFocus(nextRef);
                break;
            case nextRef:
                setCurrentFocus(closeRef);
                break;
            default:
                break;
        }
    } else {
        switch(currentFocus){
            case closeRef:
                setCurrentFocus(nextRef);
                break;
            case prevRef:
                setCurrentFocus(closeRef);
                break;
            case nextRef:
                setCurrentFocus(prevRef);
                break;
            default:
                break;
    }
  }
}

  return (
    <>
      <h3>Galerie</h3>
      <StyledGallery
        fullScreen={!!opened}
        className="gallery"
        aria-label="Galerie veterinární ambulance"
      >
        <div onKeyDown={handleKeyPress}
            aria-hidden={!opened}
            role="dialog"
            className="gallery__fullscreen"             
            style={!opened ? {opacity:"0"} : {opacity:'1'}}
            >
          <div className="gallery__img-wrap">
          <img
              aria-labelledby="galleryImgLabel"
              className="gallery__img-fs"
              src={opened ? imgArr[currentIndex].src : ""}
              alt={opened ? imgArr[currentIndex].alt : ""}
            />
            <button
              onClick={handleClose}
              aria-label="Zavřít galerii"
              tabIndex={!opened ? -1 : 0}
              ref={closeRef}
            >
              <img src={close} alt="" />
            </button>
            <button
              aria-label="Předchozí obrázek"
              onClick={handlePrev}
              tabIndex={!opened ? -1 : 0}
              ref={prevRef}
              className="left"
            >
              <img src={galleryArrow} alt="" />
            </button>
            <button
              onClick={handleNext}
              tabIndex={!opened ? -1 : 0}
              aria-label="Další obrázek"
              ref={nextRef}
              className="right"
            >
              <img src={galleryArrow} alt="" />
            </button>
            <p id="galleryImgLabel" className="img__label">
              {opened ? imgArr[currentIndex].alt : ""}
            </p>
            <p className="img__count">
              {currentIndex + 1 + " / " + imgArr.length}
            </p>
          </div>
        </div>
        {imgArr.map(el => (
          <img
            onClick={handleOpen}
            onKeyDown={handleKeyPress}
            tabIndex="0"
            src={el.src}
            alt={el.alt}
            key={el.src}
            className="gallery__img"
          />
        ))}
      </StyledGallery>
    </>
  );
};

export default Gallery;
