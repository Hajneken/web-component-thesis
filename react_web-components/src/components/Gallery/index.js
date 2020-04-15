import React from "react";

//SVG
import close from "../../Assets/svg/close.svg";
import galleryArrow from "../../Assets/svg/galleryArrow.svg";

const Gallery = props => {
  const imgArr = props.images;


  return (
    <>
      <h3>Galerie</h3>
        <vet-gallery class="animate"></vet-gallery>
    </>
  );
};

export default Gallery;
