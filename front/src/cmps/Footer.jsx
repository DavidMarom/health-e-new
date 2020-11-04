import React from 'react'

export function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">

                <div className="foot-col">
                <div className="bold"><p>TECHNOLOGY</p></div>
                    <p>React</p>
                    <p>Node.js</p>
                    <p>Mongo DB</p>
                    
                </div>

                <div className="foot-col">
                    <div className="bold"><p>CONTACT</p></div>
                    <div className="mb10" ><a className="foot-hover mb10" href="mailto:davidmarom.pro@gmail.com">davidmarom.pro@gmail.com</a></div>
                    <a className="foot-hover" href="https://www.linkedin.com/in/maromdavid/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-linkedin fa-2x"></i></a>
                    
                </div>
                <div className="foot-col">
                    <div className="bold"><p>THE TEAM</p></div>
                    <div><a className="foot-hover" href="https://www.linkedin.com/in/maromdavid/" target="_blank" rel="noopener noreferrer">David Marom</a></div>
                    <div><a className="foot-hover" href="https://www.linkedin.com/in/chen-edri-46290776/" target="_blank" rel="noopener noreferrer">Chen Edri</a></div>
                    <div><a className="foot-hover" href="https://www.linkedin.com/in/daniel-bar-1b2a9653/" target="_blank" rel="noopener noreferrer">Daniel Bar</a></div>
                    
                </div>
            </div>
        </div>
    )
}
