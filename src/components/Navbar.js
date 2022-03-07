import React, { Component } from 'react';
import Navitem from './Navitem';
import profilepic from '../img/profile_photo.jpg';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav className="glass">
            <img src={profilepic} className="profilepic"></img>
            <h2>Phuoc Pham Hai</h2>
            <p>Front-end Developer</p>
            <p className='space_line'><div className="hr_line glass"><div className="hr_inner"></div></div> </p>
            <p className='contact'><i class="fas fa-phone-alt"></i> 0906634091 </p>
            <p className='contact'><i class="fas fa-envelope"></i> phamhaiphuoc15@gmail.com </p>
            <p className='contact'><i class="fa fa-map-marker" aria-hidden="true"></i> District 4, TPHCM </p>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Portfolio" tolink="/portfolio"  activec={this.activeitem}></Navitem>
            <Navitem item="Contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar
    