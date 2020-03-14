import styled from "styled-components";

import ArrowSvg from '../../Assets/svg/arrow.svg'

const StyledTimetable = styled.div`

&:after{
 background: url(${ArrowSvg});
 //box-shadow: var(--shadow-color);
  filter: drop-shadow( 0 0 10px rgba(89,128,205,0.15));
}

`

export default StyledTimetable