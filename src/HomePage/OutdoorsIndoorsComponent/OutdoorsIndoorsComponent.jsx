import React, { Component } from 'react';
import './OutdoorsIndoorsComponent.scss';
import ball from '../../Images/ball.png';
import board from '../../Images/aaaa.svg';
import {
    Card, CardImg, CardTitle,
     CardBody
} from 'reactstrap';

class OutdoorsIndoorsComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div className="cot">
                <div className="row px-5 py-2">
                    <div className="col-sm-6">

                        <Card className=" bg-light mb-3 " id={"card1"} >
                            <CardBody>

                            <CardTitle><h3 id={"outdoors"}>Outdoors</h3>
                                    <p id={"shop"}>shop</p></CardTitle>

                                <CardImg src={ball}  id={"ball"}/>

                                <div className="mb-2 text-muted">

                                    <div className="d-flex align-items-end flex-column py-0">
                                        <div className="mt-auto p-2">
                                            <a href="#/" className="btn btn-light" id={"shop_outdoors"}>Shop Outdoors</a>

                                        </div>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
                    </div>


                    <div className="col-sm-6">

                        <Card className=" bg-light mb-3 " id={"card2"}>
                            <CardBody>

                                <CardTitle><h3 id={"indoors"}>Indoors</h3>
                                    <p id={"shop"}>shop</p></CardTitle>

                                <CardImg src={board} id={"board"}/>

                                <div className="mb-2 text-muted">

                                    <div className="d-flex align-items-end flex-column py-0">
                                        <div className="mt-auto p-2">
                                            <a href="#/" className="btn btn-light" id={"shop_indoors"}>Shop Indoors</a>

                                        </div>
                                    </div>
                                </div>

                            </CardBody>
                        </Card>
            </div>
                </div>
            </div>

        );
    }
}

export default OutdoorsIndoorsComponent;

