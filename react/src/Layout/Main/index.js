import React from 'react';
import Gallery from "../../components/Gallery";
import Timetable from "../../components/Timetable";

import {Section} from "../Section/styled";

//SVG
import phone from   '../../Assets/svg/phone.svg'
import location from   '../../Assets/svg/location.svg'
import bus from   '../../Assets/svg/bus.svg'

//JPG
import about from '../../Assets/img/veterinar.jpg'
import MessageForm from "../../components/MessageForm";

//img
import ambulance from "../../Assets/img/ambulance.jpg";
import room1 from "../../Assets/img/cekarna1.jpg";
import room2 from "../../Assets/img/cekarna2.jpg";
import ordinace from "../../Assets/img/ordinace.jpg";


const Main = () => {
    
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

    return(
        <>
            <Section id="home" className="p-section">
                <div className="hero-description"><h1>Veterinární ambulance na máji</h1>
                    <p>Prevence a léčba malých zvířat</p></div>
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
                    <h2>Kontakt</h2>
                    <div className="contact-info">
                        <a className="contact-info__link"
                           href="tel:+420385511793">
                        <img className="svg-icon"
                             src={phone}
                             alt="Ikona Telefonu"/>
                        <span>+ 420 385 511 793</span></a>
                        <a className="contact-info__link"
                           href="#end">
                        <img className="svg-icon" src={location} alt="Ikona Lokace"/>
                        <span>V. Volfa 45, České Budějovice</span></a>
                        <a className="contact-info__link"
                           href="#end">
                            <img className="svg-icon" src={bus} alt="Ikona Autobusové zastávky"/>
                        <span>Jaroslava Bendy</span></a>
                    </div>
                    <MessageForm />
                </div>
            </Section>
            <section id="gallery">
                <Gallery images={galleryImages} />
            </section>
        </>
    )
}

export default Main;


