import React, { Component } from 'react';
import './ModalComponent.scss';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import NeedHelp from '../../Images/NeedHelp.png';

class ModalComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal : false
        }
        }



    render() {

        return (


            <Modal       size="sm"

                         show={this.props.show} onHide={this.props.close}  class="modal fade"  id="modal"   aria-hidden="true" >
                <Modal.Header  className="d-flex justify-content-center">
                    <button type="button" className="close" onClick={this.props.close} >
                    <span aria-hidden="true">×</span>
            </button>
            </Modal.Header>

        <Modal.Body>
                            <div className="row no-gutters">
                                <div className="col-px-5">
                                    <Image  src={NeedHelp}/>
                                </div>
                                <div className="col-px-7">
                                    <div className=" px-3">
                                      <h3 >Need Help?</h3>
                                  <p>Start a live call with us now to have us attend to any
                                      of your enquiries. </p>

                                        <button type="submit" className="btn btn-dark">Start Live chat</button>
                                        <button type="submit" className="btn btn-white" id = "btn_white" >Request for call back
                                        </button>

                                    </div>
                                </div>

                            </div>


                </Modal.Body>

            </Modal>
    );
    }
}
export default ModalComponent