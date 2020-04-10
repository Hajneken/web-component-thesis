import React, {useState, useEffect} from 'react';
import gsap from 'gsap';

import Gallery from "../../components/Gallery";
import Timetable from "../../components/Timetable";
import MessageForm from "../../components/MessageForm";

import {Section} from "../Section/styled";

//SVG
import phone from   '../../Assets/svg/phone.svg'
import location from   '../../Assets/svg/location.svg'
import bus from   '../../Assets/svg/bus.svg'

// Hero
import hero from '../../Assets/img/zahlavi.png'

//JPG
import about from '../../Assets/img/veterinar.jpg'

//Gallery
import ambulance from "../../Assets/img/ambulance.jpg";
import room1 from "../../Assets/img/cekarna1.jpg";
import room2 from "../../Assets/img/cekarna2.jpg";
import ordinace from "../../Assets/img/ordinace.jpg";


import Terms from "../../components/Terms";
import Modal from "../../components/Modal";


const Main = () => {

    const [modalBtn, setModalBtn] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    
    const handleModalToggle = (e) => {
        e.preventDefault();
        setModalOpened(!modalOpened);
        setModalBtn(e.target);
    }

    const galleryImages =[
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
      
    useEffect(()=>{
          gsap.fromTo(['.hero-description__header', '.hero-description__subheader'], {opacity:0, y:50}, {opacity:1, y:0, stagger:0.6, duration:2})
      }, [])

    return(
        <main>
            <Section id="home" className="p-section">
                <div 
               
                className="hero-description"><h1 className="hero-description__header">Veterinární ambulance na máji</h1>
                    <p className="hero-description__subheader">Prevence a léčba malých zvířat</p></div>
                    <img className="hero" src={hero} alt=''/>
            </Section>
            <Section id="hours">
                <Timetable />
            </Section>
            <Section id="about">
                <article>
                    <div>
                        <h2>MVDr. Dana Zemancová</h2>
                        <p>Již od roku 1995 poskytuje odbornou preventivní péči a léčbu <strong>psů</strong>,
                            <strong> koček</strong> a dalších <strong>malých zvířat</strong>. Nabízené služby zahrnují drobné
                            úkony jako <strong>očkování</strong>, <strong>čipování</strong> nebo <strong>odčervení</strong>.
                            Dále poskytujeme <strong>laboratorní</strong> a <strong>mikroskopická</strong> vyšetření a drobné
                            <strong> chirurgické zákroky</strong>.</p></div>
                    <div className="about__img">
                        <img src={about} alt="Veterinářka Dana Zemancová" />
                    </div>
                </article>
            </Section>
            <Section id="contact">
                <div className="contact-grid">
                    <h2 className="contact-header">Kontakt</h2>
                    <div className="contact-info">
                        <a className="link contact-info__link"
                           href="tel:+420385511793">
                        <img className="svg-icon"
                             src={phone}
                             alt="Ikona Telefonu"/>
                        <span>+ 420 385 511 793</span></a>
                        <a className="link contact-info__link"
                           href="#end">
                        <img className="svg-icon" src={location} alt="Ikona Lokace"/>
                        <span>V. Volfa 45, České Budějovice</span></a>
                        <a className="link contact-info__link"
                           href="#end">
                            <img className="svg-icon" src={bus} alt="Ikona Autobusové zastávky"/>
                        <span>Jaroslava Bendy</span></a>
                    </div>
                    <MessageForm openModal={handleModalToggle} />
                </div>
            </Section>
            <Section id="gallery">
                <Gallery images={galleryImages} />
            </Section>
            <Modal
                closeMethod={handleModalToggle}
                opened={modalOpened}
                openedBy={modalBtn}
                agreeBtn
                agreeBtnLabel="Souhlasím">
                <Terms />
            </Modal>
        </main>
    )
}

export default Main;


