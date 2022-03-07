import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Phuoc Pham Hai</h2>
            <p>Front-end Developer</p>
            <br></br>
            <p className="p10"> I am final-year student in University of Economics
and Finance (UEF), majoring in Software
Engineering, I learn about coding when i was 16
years old. I've written software in different
languages. 
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3 className="rk">Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <div className="rk1">

            <h4>UEF</h4>
            <p className="p1">IT</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>2018 - 2022</p>
            </div>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Node</div>
            <div class="sk s6 glass">Python</div>
            </div>
            )
        }
    }
    
export default About
    