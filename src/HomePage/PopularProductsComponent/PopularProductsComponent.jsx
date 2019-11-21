import React, { Component } from 'react';
import './PopularProductsComponent.scss';
import {
    Card, CardImg, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import pic1 from '../../Images/pic1.PNG';
import pic2 from '../../Images/pic2.PNG';
import pic3 from '../../Images/pic3.PNG';
import pic4 from '../../Images/pic4.PNG';
import pic5 from '../../Images/pic5.PNG';
import pic6 from '../../Images/pic6.PNG';
import pic7 from '../../Images/pic7.PNG';
import pic8 from '../../Images/pic8.PNG';
import Container from "react-bootstrap/Container";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PopularProductsComponent extends Component {
    render() {

        return (
            <Container>
                <Row  className="row p-3">
                    <Col sm={8}>
                        <ul className="known text-left">
                            <h1 className="d-inline-block mr-3">Popular</h1>
                            <h5 className="d-inline-block mr-5" id={"shop"}>SHOP</h5>
                        </ul>
                    </Col>
                        <Col  sm={4}>
                            <h5 className="d-inline-block mr-5">Previous</h5>
                                <div className="vl d-inline-block mr-5 "></div>
                                <h5 className="d-inline-block mr-5">Next</h5>

                        </Col>

            </Row>


                    <Row className="products">

                <Col className="col-lg-3 col-12">
                <Card className=" card ">
                    <CardBody>
                        <CardImg src={pic1} alt="Card image" />
                        <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                        <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>
                    </CardBody>
                </Card >
    </Col>
                 <div className="col-lg-3 col-12">
                     <Card className="card" >
                         <CardBody>
                             <CardImg src={pic2} />

                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>

                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12">
                     <Card className=" card " >
                         <CardBody>
                             <CardImg src={pic3}/>

                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>
                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12">

                 <Card >
                     <CardBody>
                         <CardImg src={pic4}/>

                         <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                         <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>
                     </CardBody>
                 </Card>
                 </div>
                 <div className="col-lg-3 col-12">
                     <Card >
                         <CardBody>
                             <CardImg src={pic5} />
                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>

                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12">
                     <Card >
                         <CardBody>
                             <CardImg src={pic6} />
                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>
                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12">
                     <Card >
                         <CardBody>
                             <CardImg src={pic7}  />
                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>
                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12 ">
                     <Card >
                         <CardBody>
                             <CardImg src={pic8} />
                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>

                         </CardBody>
                     </Card>
                 </div>


             </Row>
            </Container>


        );
    }
}
export default PopularProductsComponent;