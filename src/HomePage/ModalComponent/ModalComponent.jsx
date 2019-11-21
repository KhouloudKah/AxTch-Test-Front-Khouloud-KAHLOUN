import React, { Component } from 'react';
import './ModalComponent.scss';
import Image from 'react-bootstrap/Image'
import NeedHelp from '../../Images/NeedHelp.png';
import Modal from "react-responsive-modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

class ModalComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal : false
        }
        }



    render() {

        return (


            <Modal
                         open={this.props.open}
                         onHide={this.props.close}
                         class="modal fade"  id="modal"
                         aria-hidden="true"
                         onClose={this.props.close}
            >

                <Container>
                            <Row className="no-gutters  justify-content-around ">
                                <div className="col-md-6">
                                    <Image  src={NeedHelp}/>
                                </div>

                                <div className="col-md-5 col-md-offset-2">
                                      <h3 >Need Help?</h3>
                                    <br/>

                                    <p>Start a live call with us now to have us attend to any
                                      of your enquiries. </p>
                                    <br/>

                                    <div className="d-inline-block">
                                        <button type="submit" className="btn btn-dark d-inline-block">Start Live chat</button>
                                        <a  className=" d-inline-block" id = "btn_white" >Request for call back</a>
                                    </div>

                                </div>

                            </Row>

                </Container>

            </Modal>
    );
    }
}
export default ModalComponent