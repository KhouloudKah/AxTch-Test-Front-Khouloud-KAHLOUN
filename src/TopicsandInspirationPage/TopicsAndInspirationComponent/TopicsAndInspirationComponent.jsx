import React, { Component } from 'react';
import MenuComponent from "../../HomePage/HeaderComponent/MenuComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faTwitter} from "@fortawesome/fontawesome-free-brands";
import './TopicsAndInspirationComponent.scss';
import Image from "react-bootstrap/Image";
import picCatalogue from "../../Images/piccatalogue.PNG";
import picHome from "../../Images/picHome.PNG";
import picbox from "../../Images/picbox.PNG";
import picVideo from  "../../Images/pic16.PNG";
import NewsletterComponent from "../../HomePage/NewsletterComponent/NewsletterComponent";


class TopicsAndInspirationComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (

    <div>

                <div className="row px-2 py-5 justify-content-between">

                    <div className="col-4" id="divStyle">
                        <div className="d-inline-block mr-5">
                            <MenuComponent/>
                        </div>
                    </div>
                </div>

            <div className="row px-5 py-2 justify-content-between">
                        <div className="col-4">
                            <div id="Topics">
                                Topics & Inspirations
                            </div>
                        </div>


                        <div className="col-4 " >
                                <div className="d-inline-block  mr-3"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faLinkedin} /></div>
                                <div className="d-inline-block mr-3 "><FontAwesomeIcon icon={faFacebook} /></div>
            </div>

            </div>
        <br/>
        <br/>

        {/* Home styling */}
        <div className="row px-5 py-5 justify-content-around">
            <div className="col-4" >
                <div >
                    <div className={"text-left"}  id = "divStyle" >
                        3.1
                    </div>
                    <br/>
                    <br/>

                    <div className={"text-left "}  id = "divStyle1" >
                        home styling
                    </div>
                    <br/>

                    <br/>
                    <p  className={"text-left d-inline-block"} >bacom ipsom dolari amet meat, tri-tip turdiken chuck t-bone, mustard .
                    Dolari amet meat, tri-tip burgdogen , chuck t-bone mustard
                    </p>
                    <div className={"text-left"}  id = "divStyle1" >
                    <button type="submit" className="btn btn-white text-left" id = "btn_white" >Find out more
                    </button>
                    </div>


                </div>
            </div>
            <div className="col-4 " >
                <Image  src={picHome}/>

            </div>

        </div>
        {/* 2017 catalogue */}
        <div className="row px-5 py-5 justify-content-between">



            <div className="col-md-3 offset-md-3" >
                <Image  src={picCatalogue}/>

            </div>
            <div className="col-md-3 offset-md-3" >
                <div >
                    <div className={"text-left"}  id = "divStyle" >
                        3.2
                    </div>
                    <br/>
                    <br/>

                    <div className={"text-left "}  id = "divStyle1" >
                        2017 Catalogue
                    </div>
                    <br/>

                    <br/>
                    <p  className={"text-left d-inline-block"} >bacom ipsom dolari amet meat, tri-tip turdiken chuck t-bone, mustard .
                        Dolari amet meat, tri-tip burgdogen , chuck t-bone mustard
                    </p>
                    <div className={"text-left"}  id = "divStyle1" >
                        <button type="submit" className="btn btn-white text-left" id = "btn_white" >Explore Topics
                        </button>
                    </div>


                </div>
            </div>
        </div>
        <div className="row px-1 py-5 ">
            <div className="col-md-3 offset-md-3
" >
                <div >
                    <div className={"text-left"}  id = "divStyle" >
                        3.3
                    </div>
                    <br/>
                    <br/>

                    <div className={"text-left "}  id = "divStyle1" >
                        No-Box Packaging
                    </div>
                    <br/>

                    <br/>
                    <p  className={"text-left d-inline-block"} >bacom ipsom dolari amet meat, tri-tip turdiken chuck t-bone, mustard .
                        Dolari amet meat, tri-tip burgdogen , chuck t-bone mustard
                    </p>
                    <div className={"text-left"}  id = "divStyle1" >
                        <button type="submit" className="btn btn-white text-left" id = "btn_white" >CSR Initiatives
                        </button>
                    </div>


                </div>
            </div>
            <div className="col-md-3 offset-md-3 " >
                <Image  src={picbox}/>

            </div>

        </div>

        <div className="col-lg-4 col-12 px-5 py-4" id={"div1"}>
            <ul className="known px-4 text-left ">
                <h1 className="d-inline-block mr-3">Our services</h1>
                <h5 className="d-inline-block mr-5" id={"shop"}>BLOG</h5>

            </ul>
        </div>

        <div className="row justify-content-around">
            <div className="col-4">
                <Image  src={picVideo}/>
            </div>
            <div className="col-4">
                <div >
                    <div className={"text-left"}  id = "divStyle" >
                        3.4
                    </div>
                    <br/>
                    <br/>

                    <div className={"text-left "}  id = "divStyle1" >
                        Doing Our Best Since 1984
                    </div>
                    <br/>

                    <br/>
                    <p  className={"text-left d-inline-block"} >bacom ipsom dolari amet meat, tri-tip turdiken chuck t-bone, mustard .
                        Dolari amet meat, tri-tip burgdogen , chuck t-bone mustard
                    </p>
                    <div className={"text-left"}  id = "divStyle1" >
                        <button type="submit" className="btn btn-white text-left" id = "btn_white" >Read About Us
                        </button>
                    </div>


                </div>            </div>
        </div>
        <NewsletterComponent/>
        <div className="row">
            <div className="col">
                Copyright Minim Website 2016
            </div>
            <div className="col-6">
                FIRST  &nbsp; &nbsp;&nbsp;SECOND&nbsp; &nbsp;&nbsp;THIRD&nbsp;&nbsp;&nbsp; FOURTH&nbsp; &nbsp;&nbsp;FIFTH&nbsp;&nbsp;&nbsp; SIXTH

            </div>
            <div className="col">
                    <div>
                        <div className="d-inline-block mr-3 "><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faFacebook} /></div>
                    </div>
                </div>            </div>
        <br/>

    </div>







        );
    }
}


export default  (TopicsAndInspirationComponent)

