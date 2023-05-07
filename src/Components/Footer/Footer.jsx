import React,{useEffect} from "react";
import './Footer.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import video from '../../assets/video1.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { BsListTask } from 'react-icons/bs';
import { TbApps } from 'react-icons/tb';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
      // i will use a react hook (useEffect) to add a scroll animation
      useEffect(() =>{
        Aos.init({duration:2000})
     }, [])
    return (
        <section className="footer">
            <div className="videodiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>Keep in Touch</small>
                        <h2>Travel With Us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder="Enter Email Address" />
                        <button data-aos="fade-up" className="btn flex" type="submit">SEND <FiSend className="icon" /></button>
                    </div>
                </div>

                <div data-aos="fade-up" className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className="icon" />Travel.
                            </a>
                        </div>

                        <div className="footerPrg">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock,
                                a Latin professor at Hampden-Sydney College in Virginia,
                                looked up one of the more obscure Latin words, consectetur,
                                from a Lorem Ipsum passage,
                                and going through the cites of the word in classical literature,
                                discovered the undoubtable source.
                            </p>
                        </div>

                        <div className="footerSocial flex">
                            <FiFacebook className="icon" />
                            <AiOutlineInstagram className="icon" />
                            <SiTripadvisor className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* Group 1 */}
                        <div className="linkGroup">
                            <span className="groupTittle">
                                OUR VACANCY
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Services
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  />
                                Insurces
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Agency
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Tourism
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Payment
                            </li>
                        </div>

                         {/* Group 2 */}
                         <div className="linkGroup">
                            <span className="groupTittle">
                               PARTENERS
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Booking
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  />
                                Rentcars
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                HostelWorld
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Trivago
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                TripAdvisor
                            </li>
                        </div>
                         

                          {/* Group 3 */}
                          <div className="linkGroup">
                            <span className="groupTittle">
                               LAST MINUTE
                            </span>
                            <li className="footerList flex">
                                <FiChevronRight />
                                EGYPT
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight  />
                                Eurppe
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                California
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                London
                            </li>
                            <li className="footerList flex">
                                <FiChevronRight />
                                Paris
                            </li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>Best Travel Website Theme</small>
                        <small>COPYRIGHTS RECEVED - AHMED MAHMOUD FATHY</small>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Footer;