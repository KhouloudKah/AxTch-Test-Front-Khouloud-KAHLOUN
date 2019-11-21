import React, { Component } from 'react';
import './CollectionComponent.scss';
import pic1 from '../../Images/3_1.png';
import pic3_2 from '../../Images/pic3.2.PNG';
import pic3_3 from '../../Images/pic3_3.PNG';
import pic3_4 from '../../Images/pic3_4.PNG';

import {
    Card,
    CardSubtitle, CardBody , CardText, CardImg
} from 'reactstrap';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CollectionComponent extends Component {

    render() {

        return (
            <Container>
                <Row  className="row p-3">
                    <Col sm={8} id={"div1"}>
                        <ul className="known text-left">
                            <h1 className="d-inline-block mr-3">Collections</h1>
                            <h5 className="d-inline-block mr-5" id={"shop"}>SHOP</h5>
                        </ul>
                    </Col>
                    <Col  sm={4}>
                        <h5 className="d-inline-block mr-5">Previous</h5>
                        <div className="vl d-inline-block mr-5 "></div>
                        <h5 className="d-inline-block mr-5">Next</h5>
                    </Col>
                </Row>

                {/* first card */}

                <Row  className="row p-3">
                    <Col md={3}>

                                <p className={"text-left d-inline-block"}>Some quick example text
                                    to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#/" className="btn btn-white text-left" id={"btn_see"}>See all collections</a>
                    </Col>
                    <Col md={6}>
                        <CardImg src={pic1}/>
                    </Col>


                        <Col md={3} className="  align-self-center" >
                        <h5 id={"collection"}> COLLECTION</h5 >
                        <p  id={"HangLamp"}> Hang Lamp </p>
                    </Col>

                </Row>

                {/* second card */}

                <Row className="p-5 ">
                    <Col >
                            <Row>
                                <Col>
                                    <img src={pic3_2}/>
                                </Col>
                                <Col >
                                        <h5 id={"collection"}> COLLECTION</h5 >
                                        <p  id={"HangLamp"}> Wood MUG </p>
                                </Col>
                                {/* third card */}

                                <Col className=" align-self-end">
                                    <img src={pic3_3}/>
                                </Col>
                                <Col className=" align-self-end">

                                        <h5 id={"collection"}> COLLECTION</h5 >
                                        <p  id={"HangLamp"}> Wood Buttle </p>
                                </Col>

                            </Row>
                    </Col>
                </Row>
                <Row className="p-5 justify-content-start">

                    <Col className="col-4">
                                    <CardImg src={pic3_4} alt="..."/>
                    </Col>
                    <Col className="col-4  align-self-center">

                                        <h5 id={"collection"}> COLLECTION</h5 >
                                        <p  id={"HangLamp"}> Wall clock </p>

                    </Col>
                </Row>

            </Container>


        );
    }
}
export default CollectionComponent