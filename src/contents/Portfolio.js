import React, { Component } from 'react';
import project1 from '../img/music-app.PNG';
import project2 from '../img/project-2.png';
import project3 from '../img/project-3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div className="work-space">
               <div class="port_out port1 glass port"><a href="https://github.com/bearhos/Music-app-js"><img src={project1} className="po1"></img><span className="span-port1"> Music App</span> </a>
               
               </div>
               
            </div> 
            <div className="work-space">
               <div class="port_out port2 glass port"><a href="https://github.com/bearhos/soi-scam"><img src={project2} className="po1"></img><span className="span-port1">Scammer Report </span> </a>
               
               </div>
               
            </div>
            <div className="work-space">
               <div class="port_out port3 glass port"><a href="https://github.com/bearhos/Charity"><img src={project3} className="po1"></img><span className="span-port1">Charity Fund Management</span> </a>
               
               </div>
               
            </div>
            <div className="work-space">
               <div class="port_out port4 glass port"><a href="https://github.com/bearhos/Music-app-js"><img src={project4} className="po1"></img><span className="span-port1"> Work 1</span> </a>
               
               </div>
               
            </div>
            </div>
            )
        }
    }
    
export default Portfolio
    