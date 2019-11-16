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
class CollectionComponent extends Component {

    render() {

        return (
            <div className="row p-2">
                <div className="col-lg-4 col-12 px-5 py-4" id={"div1"}>
                    <ul className="known px-4 text-left ">
                        <h1 className="d-inline-block mr-3">Collections</h1>
                        <h5 className="d-inline-block mr-5"
                            id={"shop"}>SHOP</h5>

                    </ul>
                </div>
                <div className="col-lg-4 col-12" id={"div2"}>

                <div className="col-lg-4 col-12 px-5 py-4">
                    <ul>
                        <h5 className="d-inline-block mr-5">Previous</h5>
                        <div className="vl d-inline-block mr-5 "></div>
                        <h5 className="d-inline-block mr-5">Next</h5>

                    </ul>
                </div>
            </div>
                <div className="row px-5">
                    <div className="col-lg-3 col-12 ">
                        <Card>
                            <CardBody>
                                <CardText className={"text-left d-inline-block"}>Some quick example text
                                    to build on the card title and make up the bulk of the card's content.</CardText>
                                <a href="#/" className="btn btn-white text-left" id={"btn_see"}>See all collections</a>
                            </CardBody>

                        </Card>
                    </div>
                    <div className="col-lg-8 col-12 m-2">

                        <Card>
                            <div className="row ">
                                <div className="col-lg-6">
                                    <CardImg src={pic1} alt="..."/>
                                </div>
                                    <CardBody>
                                        <CardSubtitle id={"collection"}> COLLECTION</CardSubtitle >
                                        <CardText  id={"HangLamp"}> Hang Lamp </CardText>
                                    </CardBody>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-lg-12 col-12 m-5">
                        <Card>
                            <div className="row ">
                                <div className="col-md-3 col-12">
                                    <CardImg src={pic3_2}/>
                                </div>
                                <div className="col-md-3 col-12">
                                    <CardBody>
                                        <CardSubtitle id={"collection"}> COLLECTION</CardSubtitle >
                                        <CardText  id={"HangLamp"}> Wood MUG </CardText>
                                    </CardBody>
                                </div>
                                <div className="col-md-3 col-12 align-self-end">
                                    <CardImg src={pic3_3}/>
                                </div>
                                <div className="col-md-3 col-12 align-self-end">
                                    <CardBody>
                                        <CardSubtitle id={"collection"}> COLLECTION</CardSubtitle >
                                        <CardText  id={"HangLamp"}> Wood Buttle </CardText>
                                    </CardBody>
                                </div>

                            </div>
                        </Card>
                    </div>
                </div>
                <div className="row p-5">

                    <div className="col-lg-12 col-12 px-5 py-4">

                        <Card>
                            <div className="row px-1 py-1 ">
                                <div className="col-lg-9">
                                    <CardImg src={pic3_4} alt="..."/>
                                </div>
                                <div className="col-lg-3 align-self-center">
                                    <CardBody>
                                        <CardSubtitle id={"collection"}> COLLECTION</CardSubtitle >
                                        <CardText  id={"HangLamp"}> Wall clock </CardText>
                                    </CardBody>
                                </div>

                            </div>
                        </Card>
                    </div>
                </div>

            </div>

        );
    }
}
export default CollectionComponent