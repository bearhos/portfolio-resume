import React, { Component } from 'react';
import Social from '../components/Social';
import Map from '../img/map.png';
import CV from '../img/CV.pdf';

class Contact extends Component {
    render() {
        return (
            <div className="condiv contact">
            <h1 className="subtopic">Contact Me</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <a href={CV} target="_blank"><div className="back3 glass">Download Resume</div></a>
            <a href="mailto:phamhaiphuoc15@gmail.com"><div className="back3 back4 glass">Contact Me</div></a>
            <div className="hr_line line3 glass"><div className="inner3"></div></div>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
    