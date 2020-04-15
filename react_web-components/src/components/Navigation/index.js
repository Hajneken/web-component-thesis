import React, { useEffect } from "react";

import VetNavigation from "../../custom-elements/VetNavigation";
import NavLink from "../../custom-elements/VetNavigation/NavLink";

const Navigation = () => {

  useEffect(()=>{
    window.customElements.define('nav-link', NavLink);
    window.customElements.define('vet-navigation', VetNavigation);
  }, [])

  return (
      <vet-navigation></vet-navigation>
  );
};

export default Navigation;
