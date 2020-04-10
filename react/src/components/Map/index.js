import React from 'react';

const Map = (props) => {

    return(
        <>
            {props.provider === "MapyCZ" &&
            <iframe
                    title={props.title || 'Lokace ordinace'}
                    src={props.src || "https://en.frame.mapy.cz/s/gofepedeja"}
                    width={props.width || '100%'}
                    height={props.width || '450'}
                    frameBorder="0" />
            }
            {(props.provider === "Google" || !props.provider) &&
            <iframe
                title={props.title || 'Lokace ordinace'}
                src={props.src || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1933.495232330495!2d14.435563662154644!3d48.983054046178445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d2fc949d3c84660!2sMVDr.%20Dana%20Zemancov%C3%A1!5e0!3m2!1sen!2scz!4v1584136823572!5m2!1sen!2scz"}
                width={props.width || '100%'}
                height={props.width || '450'}
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0" />
            }
            </>
    )
}

export default Map;