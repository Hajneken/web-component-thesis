import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
 :root {
  --primary: #6C9AF4;
  --secondary: var(--white);
  --black: black;
  --white: white;
  --primary-darker: #5980CD;
  --shadow: 0 7px 6px 0px rgba(0, 0, 0, 0.1);
  --shadow-color: 0 0 10px 7px rgba(89, 128, 205, 0.15);
  --text-shadow: 1px 1px rgba(0, 0, 0, 0.1); }

html {
  /* 1rem = 10px */
  font-size: 62.5%; }

@font-face {
  font-family: "Nunito", sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap&subset=latin-ext"); }

* {
  font-family: "Nunito", sans-serif; }

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

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
  /*background-image: url("/Assets/img/zahlavi.png");*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative; }
#home:after {
  z-index: 0;
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
  /*background-image: url("/Assets/svg/transition-top.svg");*/
  background-repeat: no-repeat;
  padding-bottom: 10rem; }
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
  /*background: url("/Assets/svg/arrow.svg");*/
  background-repeat: no-repeat;
  background-position: 30px 0px;
  height: 100%;
  width: 150%; }
@media (min-width: 768px) {
  #hours .timetable::after {
    display: block; } }

#about {
  margin-bottom: 250px; }

#contact {
  background: var(--primary); }
#contact h2, #contact p, #contact a {
  color: white; }
#contact::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: calc(100% - 10px);
  /*background-image: url("/Assets/svg/contact-top.svg");*/
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  background-size: cover; }
#contact::after {
  content: "";
  position: absolute;
  left: 0;
  top: calc(100% - 10px);
  /*background-image: url("/Assets/svg/contact-bottom.svg");*/
  background-repeat: no-repeat;
  width: 100%;
  height: 280px;
  background-size: cover; }
#contact h2 {
  grid-column: 1/-1;
  text-align: center;
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 1;
  position: relative; }
@media (min-width: 768px) {
  #contact h2 {
    margin-bottom: 4rem;
    font-size: 6.8rem; } }
#contact h2::after {
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
  margin: 130px 0 25px 0; }
@media (min-width: 1280px) {
  #gallery {
    margin: 240px 0 100px 0; } }
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
    grid-row: 1/-1; } }
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
  z-index: 10;
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
  justify-content: center;
  margin: 3rem 0;
  position: relative;
  padding: 30px; }
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
@media (min-width: 768px) {
  .contact-info:before {
    height: 80%; } }

.contact-info__link {
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
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000; }
@media (min-width: 768px) {
  header {
    top: 0;
    bottom: unset; } }

.main-nav {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 60px; }
@media (min-width: 768px) {
  .main-nav {
    grid-template-columns: 4fr repeat(4, 100px) 1fr; } }
@media (min-width: 768px) {
  .main-nav .nav__link:first-child {
    grid-column: 2/3; } }
@media (min-width: 768px) {
  .main-nav .nav__link:last-child {
    grid-column: -2/-3; } }

.nav__link {
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
  transition: all 250ms ease-in-out;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: var(--black);
  font-weight: 700; }
.nav__link:after {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(180deg, var(--primary) 0%, var(--primary-darker) 100%); }
.nav__link:hover, .nav__link.active {
  transition: all 250ms ease-in-out;
  color: var(--secondary); }
.nav__link:hover:after, .nav__link.active:after {
  opacity: 1;
  transition: all 250ms ease-in-out; }
.nav__link:hover .svg-icon, .nav__link.active .svg-icon {
  fill: var(--secondary);
  animation: bounce 150ms; }
.nav__link .svg-icon {
  fill: var(--primary);
  flex: 2; }
.nav__link span {
  flex: 1; }

@keyframes bounce {
  0% {
    transform: scale(1); }
  50% {
    transform: scale(1.09); }
  100% {
    transform: scale(1); } }

.contact-form {
  position: relative;
  display: grid;
  grid-gap: 15px;
  justify-items: center;
  padding-top: 7rem; }
@media (min-width: 992px) {
  .contact-form {
    grid-template-columns: repeat(2, 1fr); } }
.contact-form:before {
  content: '';
  position: absolute;
  /*background-image: url("/Assets/svg/email.svg");*/
  fill: white;
  width: 7rem;
  height: 7rem;
  left: 50%;
  top: -13px;
  transform: translateX(-50%); }

.contact-form__field {
  position: relative;
  width: 100%;
  background: white;
  border-radius: 15px;
  box-shadow: var(--shadow); }
.contact-form__field:last-of-type {
  grid-column: 1/-1; }
.contact-form__field span {
  font-size: 1.4rem;
  color: var(--primary-darker);
  position: absolute;
  width: calc(100% - 2rem);
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: all 150ms ease-in-out; }
.contact-form__text-area .contact-form__field span {
  top: 1rem;
  transform: unset; }

.contact-form__input, .contact-form__text-area {
  border-radius: 15px;
  color: black;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  background: transparent;
  border: none;
  padding: 1rem 1rem 0.8rem 1rem;
  resize: none;
  outline: none; }
.contact-form__input:focus, .contact-form__text-area:focus {
  outline: none; }

.contact-form__input {
  border-bottom: 3px solid transparent; }
.contact-form__input:focus {
  border-bottom: 3px solid var(--primary-darker); }
.contact-form__input:focus + span {
  font-size: 1.2rem;
  color: var(--white);
  transform: translateY(-230%);
  transition: all 150ms ease-in-out; }
.contact-form__input:valid {
  border-bottom: 3px solid green; }
.contact-form__input:valid + span {
  font-size: 1.2rem;
  color: var(--white);
  transform: translateY(-230%);
  transition: all 150ms ease-in-out; }

.contact-form__btn {
  border-radius: 15px;
  background: white;
  border: none;
  padding: 0.8rem 1.2rem;
  font-weight: 800;
  box-shadow: var(--shadow);
  grid-column: 1/-1;
  font-size: 1.8rem;
  transition: all 200ms ease-in-out; }
@media (min-width: 768px) {
  .contact-form__btn {
    font-size: 2.4rem;
    padding: 1.2rem 1.5rem; } }
.contact-form__btn:hover {
  transform: scale(1.08);
  transition: all 200ms ease-in-out; }

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
.gallery__img:hover {
  transform: scale(1.05);
  transition: all 150ms ease-in-out; }

html {
  scroll-behavior: smooth; }

.white {
  color: var(--white); }

.hero-description {
  z-index: 10;
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
  text-shadow: var(--text-shadow);
  font-weight: 800;
  text-align: center; }
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
  width: 100%; }
.about__img img {
  object-fit: cover;
  width: 100%;
  border-radius: 15px;
  box-shadow: var(--shadow-color); }

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