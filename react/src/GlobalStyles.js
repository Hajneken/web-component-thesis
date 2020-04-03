import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
 :root {
   /* --primary: #6C9AF4; */
  --primary: #6894ea;
  --secondary: var(--white);
  --black: black;
  --white: white;
  --primary-darker: #567bc5;
  --shadow: 0 7px 6px 0px rgba(0, 0, 0, 0.1);
  --shadow-color: 0 0 10px 7px rgba(89, 128, 205, 0.15);
  --text-shadow: 1px 1px rgba(0, 0, 0, 0.1); 
  --filter-shadow: drop-shadow(0px 0px 6px rgba(89,128,205,0.15));
  }

html {
  /* 1rem = 10px */
  font-size: 62.5%;
  }

@font-face {
  font-family: "Nunito", sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap&subset=latin-ext"); }

* {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   box-sizing: border-box;
   }

h1,
h2,
p {
  margin: 0;
  text-shadow: var(--text-shadow); }

h1 {
  font-size: 7rem; }

h2 {
  font-size: 2.8rem;
  margin-bottom: 1.8rem; }

p {
  font-size: 1.6rem; }

table {
  margin: 0 auto;
  min-width: 230px; }

th {
  font-size: 2.1rem;
  text-align: left;
  width: 35%; }
@media (min-width: 768px) {
  th {
    font-size: 2.4rem; } }

td {
  font-size: 2.2rem;
  line-height: 2.4;
  font-weight: 800;
  text-align: center;
  width: 65%; }
@media (min-width: 768px) {
  td {
    font-size: 2.8rem; } }

main {
  display: grid;
  background-color: var(--secondary);
  overflow-x: hidden; }

section {
  padding: 0 20px;
  position: relative;
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr minmax(280px, 1190px) 1fr; }
section > * {
  grid-column: 2/3; }

.p-section {
  height: 100vh; }

#home {
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  }
#home:after {
  z-index: 1;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.28); }
@media (min-width: 992px) {
  #home:after {
    display: none; } }

#hours {
  justify-items: center;
  position: relative;
  grid-column: 1/-1;
  background-repeat: no-repeat;
  background-size: cover;
  height: 125.331%;
   }
@media (min-width: 768px) {
  #hours {
    justify-items: left; } }
#hours .timetable {
  position: relative;
  margin-left: 5%; }
#hours .timetable::after {
  display: none;
  content: "";
  position: absolute;
  left: 100%;
  top: 0;
  background-repeat: no-repeat;
  background-position: 30px 0px;
  height: 100%;
  width: 150%;
  animation: kenburns 30s alternate infinite;
   }
@media (min-width: 768px) {
  #hours .timetable::after {
    display: block; } }

#about {
  margin-bottom: 250px;
  height: 80vh;
  }

#contact {
  background: var(--primary);
  scroll-margin-top: 250px;
  margin:17.546% 0 17.546% 0;
  
  }
#contact::before {
  pointer-events: none;
  content: "";
  z-index: 1;
  position: absolute;
  left: 0;
  padding-top: 14.886%;
  bottom: calc(100% - 10px);
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  background-size: cover;
  left: -1%;
  right: -1%;
  width: 102%;
} }
#contact::after {
  content: "";
  position: absolute;
  pointer-events: none;
  top: calc(100% - 10px);
  background-repeat: no-repeat;
  width: 100%;
  padding-top:17.546%;
  background-size: cover;
  left: -1%;
  right: -1%;
  background-repeat: no-repeat;
  width: 102%;
  background-position: center;
  z-index: 1;
} }
.contact-header {
  color: white;
  grid-column: 1/-1;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 1;
  position: relative; }
@media (min-width: 768px) {
  .contact-header {
    margin-bottom: 4rem;
    font-size: 6.8rem; } }
.contact-header::after {
  position: absolute;
  content: "";
  width: 41px;
  height: 4px;
  left: 50%;
  bottom: -1rem;
  transform: translateX(-50%);
  background-color: var(--white);
  border-radius: 5px; }

#gallery {
  margin: 0 0 25px 0; }
@media (min-width: 1280px) {
  #gallery {
    margin: 0 0 100px 0; } }
#gallery h3 {
  font-size: 4rem;
  line-height: 1.2;
  font-weight: 700;
  position: relative;
  color: var(--black); }
#gallery h3:after {
  position: absolute;
  content: "";
  width: 41px;
  height: 4px;
  left: 0;
  bottom: -1rem;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-darker) 100%);
  border-radius: 5px; }

article {
  display: grid;
  grid-gap: 4rem;
  grid-auto-flow: dense;
  align-items: center;
  margin-top: 3.6rem; }
@media (min-width: 768px) {
  article {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8rem; } }
@media (min-width: 768px) {
  article .about__img {
    grid-row: 1/-1;
    } }
article h2 {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  position: relative; }
@media (min-width: 768px) {
  article h2 {
    font-size: 3.2rem; } }
article h2:after {
  position: absolute;
  content: "";
  width: 41px;
  height: 4px;
  left: 0px;
  bottom: -1rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-darker) 100%); }
article p {
  font-size: 1.6rem; }
@media (min-width: 768px) {
  article p {
    font-size: 1.8rem; } }

.contact-grid {
  position:relative;
  z-index: 5;
  margin-top: -110px; }
@media (min-width: 768px) {
  .contact-grid {
    margin-top: 0;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 1fr); } }

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  padding: 30px;
  max-height: 300px;
  margin-top: 7rem;
  margin-bottom: 3rem;
  }
.contact-info:before {
  left: 0;
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-darker) 100%);
  border-radius: 15px;
  z-index: 0;
  box-shadow: var(--shadow); }

.contact-info__link {
  color: white;
  z-index: 1;
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  text-shadow: var(--text-shadow); }
@media (min-width: 768px) {
  .contact-info__link {
    font-size: 2.4rem; } }
@media (min-width: 1280px) {
  .contact-info__link {
    font-size: 3.2rem; } }
.contact-info__link .svg-icon {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  transition: all 150ms ease-in-out; }
@media (min-width: 768px) {
  .contact-info__link .svg-icon {
    font-size: 2.4rem; } }
@media (min-width: 1280px) {
  .contact-info__link .svg-icon {
    width: 3.2rem;
    height: 3.2rem; } }
.contact-info__link:hover .svg-icon, .contact-info__link:focus .svg-icon {
  transform: scale(1.05);
  transition: all 150ms ease-in-out; }

.timetable {
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow-color);
  max-width: 580px;
  padding: 20px 30px;
  height: max-content;
  margin-bottom: 110px;
  margin-top: 60px; }
@media (min-width: 576px) {
  .timetable {
    padding: 27px 60px; } }
.timetable > * {
  margin-bottom: 2.4rem;
  position: relative; }
.timetable > *:not(:last-child)::after {
  position: absolute;
  content: "";
  width: 60px;
  height: 5px;
  left: 50%;
  bottom: -1.5rem;
  transform: translateX(-50%);
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-darker) 100%);
  border-radius: 5px; }
.timetable h2 {
  text-align: center; }
@media (min-width: 576px) {
  .timetable h2 {
    font-size: 3.8rem; } }

.timetable__week {
  width: 100%; }

header {
  width: 100%;
  height: 65px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10; }
@media (min-width: 768px) {
  header {
    top: 0;
    bottom: unset; } 
    }  


.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-gap: 20px; }

.gallery__img {
  width: 100%;
  height: 100%;
  min-height: 85px;
  height: auto;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: var(--shadow-color);
  transition: all 150ms ease-in-out; }
.gallery__img:hover, .gallery__img:focus{
  outline: none;
  transform: scale(1.05);
  transition: all 150ms ease-in-out; }

html {
  ${'' /* not supported in Safari */}
  scroll-behavior: smooth;
   }

.white {
  color: var(--white); }
  
.hero{
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width:100%;
  height: 100%;
  object-fit: cover;
  grid-column: 1;
  animation: kenburns 20s alternate infinite;
}

@keyframes kenburns {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
    }
    100% {
        transform: scale3d(1.1, 1.1, 1.1) translate3d(-10px, -5px, 0px);
        animation-timing-function: ease-in;
        opacity: 1;
    }
}

.link{
cursor: pointer;
background: none;
border: none;
padding: 0;
color: var(--secondary);
text-decoration: underline;
transition: all 150ms ease-in-out;
}

.link:hover{
  text-shadow: 1px 0 currentColor;
}

.hero-description {
  z-index: 5;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  max-width: 320px; }
@media (min-width: 576px) {
  .hero-description {
    max-width: 524px; } }
@media (min-width: 992px) {
  .hero-description {
    justify-self: left; } }
.hero-description h1 {
  font-size: 4.1rem;
  line-height: 55px;
  text-transform: uppercase;
  font-weight: 800;
  text-align: center;
  opacity: 0;
  
  background: linear-gradient(90deg,var(--primary), #3f5093, var(--primary-darker));
    background-clip: text;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    filter: var(--filter-shadow);
     }
   .hero-description__subheader{
     opacity: 0;
     }
@media (min-width: 576px) {
  .hero-description h1 {
    font-size: 7.4rem;
    line-height: 101px; } }
.hero-description p {
  font-size: 2.4rem;
  font-weight: lighter;
  text-align: center; }
@media (min-width: 576px) {
  .hero-description p {
    font-size: 3rem; } }

.about__img {
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  }
.about__img img {
  object-fit: cover;
  border-radius: 15px;
  width: 100%;
  height: auto;
  box-shadow: var(--shadow-color); 
  animation: kenburns 30s alternate infinite;
  }

.longer-text {
  padding-left: 1.2rem;
  position: relative; }
.longer-text:before {
  position: absolute;
  content: '';
  left: 0;
  top: 50%;
  height: 100%;
  width: 5px;
  border-radius: 5px;
  background-color: var(--secondary);
  transform: translateY(-50%); }

footer {
  background: var(--primary-darker);
  display: flex;
  justify-content: center;
  flex-direction: column; }
footer p {
  text-align: center;
  color: var(--secondary);
  padding: 26px 0; }
footer .author {
  color: var(--secondary);
  text-decoration: none;
  font-weight: bold; }

`

export default GlobalStyles