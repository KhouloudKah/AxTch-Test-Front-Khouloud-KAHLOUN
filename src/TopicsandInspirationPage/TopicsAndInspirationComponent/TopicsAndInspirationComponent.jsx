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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

class TopicsAndInspirationComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        return (
            <div className="container" id={"div11"}>

                <Row className="  py-4 ">

                    <Col className="col-4" id="divStyle">
                        <div className="d-inline-block mr-5">
                            <MenuComponent/>
                        </div>
                    </Col>
                </Row>

            <Row >
                        <Col className="col-md-4 mr-auto">
                            <div id="Topics">
                                Topics & Inspirations
                            </div>
                        </Col>
                        <Col className="col-md-4 offset-md-4">
                                <div className="d-inline-block  mr-3"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faLinkedin} /></div>
                                <div className="d-inline-block mr-3 "><FontAwesomeIcon icon={faFacebook} /></div>
            </Col>
            </Row>
        <br/>
        <br/>

        {/* Home styling */}
        <Container>
        <Row className=" px-5 py-5  justify-content-center">


            <Col className="col" >
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
            </Col>
            <Col className="col">
                <Image  src={picHome} alt={"..."}/>
            </Col>

        </Row>
        </Container>

            {/* 2017 catalogue */}
                <Container>
        <Row className=" px-5 py-5  justify-content-center" >

            <Col className="col" >
                <img  src={picCatalogue} alt={"..."}/>

            </Col>
            <Col className="col" >
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
            </Col>
        </Row>
                </Container>
                {/*   No-Box Packaging*/}
                <Container>
                <Row className=" px-1 py-5 ">
            <Col md={{ span: 3, offset: 3 }} >
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


            </Col>
            <Col md={{ span: 3, offset: 3 }}>
                <img  src={picbox} alt={"..."}/>

            </Col>

        </Row>
                </Container>
                <Row className="   ">
                    <Col className="col-md-4 mr-auto">
                        <ul className="known text-left ">
                            <h1 className="d-inline-block mr-3">Our services</h1>
                            <h5 className="d-inline-block mr-5" id={"shop"}>BLOG</h5>

                        </ul>
                    </Col>
                    <Col className="col-md-4 offset-md-4">

                    </Col>
                </Row>



        <Row>
            <Col className="col-md-6">
                <img  src={picVideo} alt="..."/>
            </Col>
            <Col className="col-md-4 col-md-offset-2">
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
            </Col>
        </Row>
                <Row className="p-5">
        <NewsletterComponent/>
                </Row>

                {/* footer*/}
        <Row  className="p-5">
            <Col>
                Copyright Minim Website 2016
            </Col>
            <Col className="col-6">
                FIRST  &nbsp; &nbsp;&nbsp;SECOND&nbsp; &nbsp;&nbsp;THIRD&nbsp;&nbsp;&nbsp; FOURTH&nbsp; &nbsp;&nbsp;FIFTH&nbsp;&nbsp;&nbsp; SIXTH

            </Col>
            <Col className="col">
                    <div>
                        <div className="d-inline-block mr-3 "><FontAwesomeIcon icon={faTwitter} /></div>
                        <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faLinkedin} /></div>
                        <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faFacebook} /></div>
                    </div>
            </Col>
        </Row>
        <br/>






            </div>
        );
    }
}


export default  (TopicsAndInspirationComponent)

