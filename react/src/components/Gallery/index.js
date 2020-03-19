import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { StyledGallery } from "./styled";

//img
import ambulance from "../../Assets/img/ambulance.jpg";
import room1 from "../../Assets/img/cekarna1.jpg";
import room2 from "../../Assets/img/cekarna2.jpg";
import ordinace from "../../Assets/img/ordinace.jpg";

//SVG
import close from "../../Assets/svg/close.svg";
import galleryArrow from "../../Assets/svg/galleryArrow.svg";

const Gallery = props => {
  // const imgArr = props.images;

  // current target when not false
  const [opened, setOpened] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [previousActiveElement, setPreviousActiveElement] = useState(null);

  const closeRef = useRef();
  
  //   When opened prevent background scroll and
  //   reference the previous active element to return
  // and focus 
  useEffect(() => {
    if (!!opened) {
      document.body.style.overflow = "hidden"; 
    } else { 
      document.body.style.overflow = "auto";
    //   focus back
      previousActiveElement && previousActiveElement.focus()
    }
    console.log(previousActiveElement)
  });
   


  const imgArr = [
    {
      src: ambulance,
      alt: "Ambulance"
    },
    {
      src: room1,
      alt: "Čekárna"
    },
    {
      src: room2,
      alt: "Čekárna z pohledu od vchodových dveří"
    },
    {
      src: ordinace,
      alt: "Ordinace s veterinářem"
    }
  ];

  //   Loop through array of images to find the index of searched image
  const initIndex = target => {
    for (let i = 0; i < imgArr.length; i++) {
      if (imgArr[i].alt === target.alt) {
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
      closeRef.current.focus();

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
    // e.stopPropagation();
    setOpened(false);
    setCurrentIndex(null);
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
    if (opened) {
      if (e.key === "Escape") {
        handleClose();
      }
      if (e.key === "ArrowRight") {
        handleNext();
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      }
    }
  };

  return (
    <>
      <h3>Galerie</h3>
      <StyledGallery
        fullScreen={!!opened}
        className="gallery"
        aria-label="Galerie veterinární ambulance"
        onKeyDown={handleKeyPress}
      >
        <div className="gallery__fullscreen">
          <div className="gallery__img-wrap">
          <img
              className="gallery__img-fs"
              src={opened ? imgArr[currentIndex].src : ""}
              alt={opened ? imgArr[currentIndex].alt : ""}
            />
            <button
              aria-label="Další obrázek"
              onClick={handlePrev}
              className="left"
            >
              <img src={galleryArrow} alt="" />
            </button>
            <button
              aria-label="Předchozí obrázek"
              onClick={handleNext}
              className="right"
            >
              <img src={galleryArrow} alt="" />
            </button>
            <button
              tabIndex="0"
              onClick={handleClose}
              aria-label="Zavřít galerii"
              ref={closeRef}
            >
              <img src={close} alt="" />
            </button>
            <p className="img__label" aria-roledescription="Popis obrázku">
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
