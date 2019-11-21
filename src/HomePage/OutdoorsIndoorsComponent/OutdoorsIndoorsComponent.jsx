import React, { Component } from 'react';
import './OutdoorsIndoorsComponent.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ball from '../../Images/ball.png';
import board from '../../Images/aaaa.svg';
import Image from 'react-bootstrap/Image'


class OutdoorsIndoorsComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {

            return(
                <Container>

                    <Row className=" px-5 py-2">
                        <Col className="col-sm-6">

                            <div className=" bg-light " id={"card1"} >
                                <div className="mt-auto p-5">
                                    <h3 id={"outdoors"}>Outdoors</h3>
                                        <p id={"shop"}>shop</p>
                                </div>
                                    <Image  src={ball} alt="..."  id={"ball"} fluid />
                                    <div className="mb-2 text-muted">
                                        <div className="d-flex align-items-end flex-column py-0">
                                            <div className="mt-auto p-2">
                                                <a  href="#/"  className="btn btn-light" id={"shop_outdoors"}>Shop Outdoors</a>

                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </Col>


                        <Col className="col-sm-6">

                            <div className=" bg-light  " id={"card2"}>
                                <div className="mt-auto p-5">

                                    <h3 id={"indoors"}>Indoors</h3>
                                        <p id={"shop"}>shop</p>
                                </div>

                                    <Image  src={board} id={"board"} alt="..." fluid />

                                    <div className="mb-2 text-muted">

                                        <div className="d-flex align-items-end flex-column py-0">
                                            <div className="mt-auto p-2">
                                                <a  href="#/"  className="btn btn-light" id={"shop_indoors"}>Shop Indoors</a>

                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </Col>
                    </Row>
                </Container>


            );
        }
    }
export default OutdoorsIndoorsComponent;

