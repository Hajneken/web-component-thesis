import React from 'react';
import Map from '../../components/Map'


const Footer = () => {

    return (
        <footer id="end">
            <Map />
            <p>&copy;{" "}
            <span id="year">{(new Date().getFullYear()) }{" "}</span>
                {'with '}
                <a href="https://hynekzemanec.me/" className="author"><span style={{color:'red'}}>♥</span> Hynek Zemanec</a>
            </p>
        </footer>
    );
}

export default Footer;





