import React from 'react';
import Map from '../../components/Map'


const Footer = () => {
    
    const date = new Date().getFullYear();
    
    // <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    return (
        <footer id="end">
            <Map />
            <p>&copy;{" "}
            <span id="year">{date}</span>
                {' with '}
                <a href="https://hynekzemanec.me/" target="_blank" rel="noopener noreferrer" className="author"><span style={{color:'red'}}>♥</span> Hynek Zemanec</a>
            </p>
        </footer>
    );
}

export default Footer;





