import React, {useState, useEffect} from 'react';

const Map = () => {

    // const [scriptLoaded, setScriptLoaded] = useState(false)

    // useEffect(()=>{
    //     const script = document.createElement('script');
    //     script.src = "https://api.mapy.cz/loader.js";
    //     script.async = true;
    //     script.addEventListener('load', window.Loader.load());
    // }, [])


    const loadScript = () => {
        

        // document.head.appendChild(script);
    }

    const onScriptLoaded = () => {
        // Loader.async = true;
        // Loader.load(null, null, () => {
        //     console.log('Loaded')
        //     });
        };



    // const createMap = () => {
    //     let center = window.SMap.Coords.fromWGS84(14.41790, 50.12655);
    //     let m = new window.SMap(window.JAK.gel("m"), center, 13);
    //     window.m.addDefaultLayer(window.SMap.DEF_BASE).enable();
    // }

    return(
        // <iframe style={{border:'none'}}
        //         src="https://en.frame.mapy.cz/s/gofepedeja"
        //         width="100%"
        //         height="466"
        //         frameBorder="0" />

        // GOOGLE
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.495232330495!2d14.435563662154644!3d48.983054046178445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d2fc949d3c84660!2sMVDr.%20Dana%20Zemancov%C3%A1!5e0!3m2!1sen!2scz!4v1584136823572!5m2!1sen!2scz"
            width="100%"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0" />

        // <iframe frameBorder="0" style={{ width: "100%", height: "450"}}
        //         src="https://www.google.com/maps/embed/v1/place?q=48.9839184,14.4338097,17&amp;key=AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk" />
    
        // <>


       // </>




    )
}

export default Map;