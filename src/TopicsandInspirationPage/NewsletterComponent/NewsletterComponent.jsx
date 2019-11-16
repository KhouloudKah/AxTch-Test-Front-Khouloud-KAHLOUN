import React, { Component } from 'react';
import './NewsletterComponent.scss';
import Form from 'react-bootstrap/Form';
import {
    Card,
    CardSubtitle, CardBody
} from 'reactstrap';
class NewsletterComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Form class="px-5 py-2">
                <div className="row">
                    <div className="col-1 ">
                    </div>
                    <div className="col-3 m-xl-5">
                        <Card className="border border-white" >
                            <CardBody >
                                <CardSubtitle >
                                <h5 className="py-3 text-left" id={"newsletter"}>Newsletter</h5>
                                </CardSubtitle>
                                    <p className={"d-inline-block text-left"}>
                                        Register now with our newsletter and get the latest updates available.
                                   </p>

                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-3 m-xl-5 px-5">

                        <Form.Group className="py-3">
                            <Form.Control  type="text" className=" px-3 py-3 " placeholder="Name" id={"newsletter"}/>
                        </Form.Group>
                        <Form.Group >
                            <Form.Control type="email" className=" px-3 py-3" id={"newsletter"} aria-describedby="emailHelp" placeholder="Email"/>
                        </Form.Group>
                    </div>
                    <div className="col-1 m-xl-5 py-4 dx-text-content-alignment-right align-self-end">
                        <br/>
                        <a href="#/" className="btn btn-dark"> Send</a>

                    </div>
                </div>

            </Form>


        );
    }
}
export default NewsletterComponent;

