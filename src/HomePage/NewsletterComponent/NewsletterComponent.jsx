import React, { Component } from 'react';
import './NewsletterComponent.scss';
import Form from 'react-bootstrap/Form';
import {
    Card,
    CardSubtitle, CardBody
} from 'reactstrap';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

class NewsletterComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Container>
                <Row  className="px-5 py-2 justify-content-md-center">

                    <Col >
                                <h5 className="py-3 text-left" id={"newsletter"}>Newsletter</h5>

                                    <p className={"d-inline-block text-left"}>
                                        Register now with our newsletter and get the latest updates available.
                                   </p>

                    </Col>
                    <Col className="col-6">
                        <Form>

                        <Form.Group className="py-3">
                            <Form.Control  type="text" className=" px-3 py-3 " placeholder="Name" id={"newsletter"}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="email" className=" px-3 py-3" id={"newsletter"} aria-describedby="emailHelp" placeholder="Email"/>
                        </Form.Group>
                        </Form>

                    </Col>
                    <Col className="py-4 dx-text-content-alignment-right align-self-end">
                        <br/>
                        <a href="#/" className="btn btn-dark"> Send</a>

                    </Col>

            </Row>
            </Container>


        );
    }
}
export default NewsletterComponent;

