import styled from "styled-components";

import ArrowSvg from '../../Assets/svg/arrow.svg'

const StyledTimetable = styled.div`

&:after{
  background: url(${ArrowSvg});
  filter: drop-shadow( 0 0 10px rgba(89,128,205,0.15));
}

.lead{
  padding: 0 0 0 2.6rem;
  font-weight: 800;
  font-size: 1.8rem;
  text-transform: lowercase;
  background: linear-gradient(90deg,var(--primary),#3f5093,var(--primary-darker));
  -webkit-background-clip: text;
    color: transparent;
    @media (min-width: 1280px) {
      padding: 0 0 0 3.3rem;
    }
}

`

export default StyledTimetable