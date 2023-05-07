import React,{useEffect} from "react";
import './Main.css';
import {GrLocation} from'react-icons/gr';
import img2 from '../../assets/img2.png';
import img6 from '../../assets/img6.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/img8.png';
import img9 from '../../assets/img9.png';
import img10 from '../../assets/img10.png';
import img11 from '../../assets/img11.png';
import img12 from '../../assets/img12.png';
import img13 from '../../assets/img13.png';
import {HiClipboardCheck} from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css'


// create array of data

const Data = [
    {
        id: 1,
        imgsrc: img2,
        desTitle: 'Egypt Cairo',
        location: 'Africa',
        grade: 'CULUTURE RELAX',
        Fees: '700$',
        description: 'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id: 2,
        imgsrc: img6,
        desTitle: 'Emirates Abu Dhabi',
        location: 'Asia',
        grade: 'CULUTURE RELAX',
        Fees: '700$',
        description: 'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:3,
        imgsrc:img7,
        desTitle:'France Paris',
        location:'Europe',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    }
    ,
    {
        id:4,
        imgsrc:img8,
        desTitle:'Australia Australia',
        location:'Australia',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:5,
        imgsrc:img9,
        desTitle:'Guanajuato',
        location:'Mexico',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:6,
        imgsrc:img10,
        desTitle:'Cappadocia',
        location:'Turkey',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:7,
        imgsrc:img11,
        desTitle:'Cinque Terre',
        location:'Italy',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:8,
        imgsrc:img12,
        desTitle:'Angkor Wat',
        location:'Cambodia',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    },
    {
        id:9,
        imgsrc:img13,
        desTitle:'Taj Mahel',
        location:'India',
        grade:'CULUTURE RELAX',
        Fees:'700$',
        description:'Cairo is one of the best travel destinations to travelin the world. '
    }
]

const Main = () => {
     // i will use a react hook (useEffect) to add a scroll animation
     useEffect(() =>{
        Aos.init({duration:2000})
     }, [])
    return (
        <section className="main container section">
            <div className="sectitle">
                <h3 data-aos="fade-right" className="title">
                    Most Visited Destinations
                </h3>
            </div>
            <div className="secContent grid">
                {/* Here we use high order array method (map) beacause we will use a list of object in one array.
                I'm going to create an array named data and from that we will use .map() array method to fetch 
                every destination at once*/}

                {
                    Data.map(({id, imgsrc, desTitle, location, grade, Fees, description}) => {
                        return(
                          <div data-aos="fade-up" key={id} className="singledestination">
                             <div className="imagediv">
                               <img src={imgsrc} />
                             </div>
                             <div className="cardInfo">
                                <h3 className="dsetitle">
                                    {desTitle}
                                </h3>
                                <span className="containt flex">
                                    <GrLocation className="icon" />
                                    <span className="name">{location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{Fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className="btn flex">
                                        Detaials<HiClipboardCheck className="icon" />
                                    </button>
                             </div>
                         </div>
                    )
                    })
                }
            </div>
        </section>
    )
}
export default Main;