import React,{useEffect} from "react";
import './Home.css';
import video from '../../assets/tour-video.mp4';
import{GrLocation}from 'react-icons/gr';
import {HiFilter}from 'react-icons/hi';
import {FiFacebook}from 'react-icons/fi';
import {AiOutlineInstagram}from 'react-icons/ai';
import {SiTripadvisor}from 'react-icons/si';
import {BsListTask}from 'react-icons/bs';
import {TbApps}from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css'
 

const Home =() =>{
    // i will use a react hook (useEffect) to add a scroll animation
    useEffect(() =>{
       Aos.init({duration:2000})
    }, [])
    return(
       <section className="Home">
        <div className="overLay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
            <div className="textDiv">
               <span data-aos="fade-up" className="smallText">
                  Our Packages
               </span>
               <h1 data-aos="fade-up" className="homeTittle">Search your Holiday</h1>

            </div>
            <div data-aos="fade-up" className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search Your Destination :</label>
                    <div className="input flex">
                        <input type="text" placeholder='Enter Name Here ...'/>
                        <GrLocation className="icon"/>
                    </div>
                </div>
                <div className="dateInput">
                    <label htmlFor="date">Search Your Date:</label>
                    <div className="input flex">
                        <input type="date" placeholder='Enter Name Here ...'/>
                        
                    </div>
                </div>
                <div className="priceInput">
                    
                    <div className="label_total flex">
                        <label htmlFor="price">Max Price:</label>
                        <h3 className="total">$5000</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" className="range" max='5000' min='1000' />
                        
                    </div>
                </div>
                <div className="searchoptions flex">
                    <HiFilter className="icon"/>
                    <span>More Filters</span>
                </div>

            </div>
            <div data-aos="fade-down" className="homefooterIcons flex">
                <div className="righticons">
                    <FiFacebook className="icon"/>
                    <AiOutlineInstagram className="icon" />
                    <SiTripadvisor className="icon" />
                </div>
                <div className="leftticons">
                    <BsListTask className="icon"/>
                    <TbApps className="icon" />
                </div>
            </div>
            
            
        </div>

       </section>
    )
}
export default Home;