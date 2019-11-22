import React, { Component } from 'react';
import './ShopComponent.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chair from '../../Images/chair.png';
import clothing from '../../Images/clothing.png';
import sport from '../../Images/sport.png';
import acc from '../../Images/acc.png';

import 'react-animated-slider/build/horizontal.css';


class ShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            img : chair,
            idOfBalisea0 : "nav-link-active",
            idOfBalisea1 : "",
            idOfBalisea2 : "",
            idOfBalisea3 : "",
        }
    }
    changePic = () => {
        this.setState({
            img: chair ,
            idOfBalisea0 : "nav-link-active" ,
            idOfBalisea1 : "link" ,
            idOfBalisea2 : "link" ,
            idOfBalisea3 : "link" ,

        });
    }
    changePic1 = () => {
        this.setState({
            img: acc ,
            idOfBalisea0 : "link" ,
            idOfBalisea1 : "nav-link-active" ,
            idOfBalisea2 : "link" ,
            idOfBalisea3 : "link" ,
        });
    }
    changePic2 = () => {
        this.setState({
            img: sport,
            idOfBalisea0 : "link" ,
            idOfBalisea1 : "link" ,
            idOfBalisea2 : "nav-link-active" ,
            idOfBalisea3 : "link" ,
        });
    }
    changePic3 = () => {
        this.setState({
            img: clothing,
            idOfBalisea0 : "link" ,
            idOfBalisea1 : "link" ,
            idOfBalisea2 : "link" ,
            idOfBalisea3 : "nav-link-active" ,
        });
    }


    render() {

        return (


                <div className="py-5 px-0">
                    <div className="view w-100">
                        <div className="row">
                            <Container>
                                <Row>
                                    <Col xs="6" sm="4">
                                        <h1 className="col-lg-4 col-12">Shop</h1>
                                        <div className="vl1"></div>

                                        <ul className="nav flex-column align-items-start">
                                            <li className="nav-item " >
                                                <a href="#/"  id={this.state.idOfBalisea0} className="btn btn-black" onClick={() => this.changePic(true)}
                                                >Home Furnishings</a>
                                            </li>
                                            <li className="nav-item " id={"nav-link"}>
                                                <a href="#/" id={this.state.idOfBalisea1} className="btn btn-black"  onClick={() => this.changePic1(true)}
                                                >Accessories</a>
                                            </li>
                                            <li className="nav-item " id={"nav-link"}>
                                                <a  href="#/" id={this.state.idOfBalisea2} className="btn btn-black" onClick={() => this.changePic2(true)}
                                                >Sport</a>
                                            </li>
                                            <li className="nav-item" id={"nav-link"}>
                                                <a href="#/" id={this.state.idOfBalisea3} className="btn btn-black"  onClick={() => this.changePic3(true)}
                                                >Clothing wear</a>

                                            </li>
                                        </ul>
                                        </Col>
                                    <Col xs="6" sm="4">
                                        <img className="d-block w-100" src={this.state.img}  alt={"Clothing wear"}/>
                                    </Col>
                                    <Col sm="4">
                                        <p>Limited Edition</p>
                                        <h1 id={"white_clock"}>White Clock</h1>
                                        <div className="d-flex align-items-end flex-column">
                                            <div className="mt-auto p-5">
                                                <a  id={"btn_shop"} href="#/" className="btn  btn-large px-5">Shop Now</a>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>


                        </div>
                    </div>

                </div>



        );
    }
}
export default ShopComponent;

