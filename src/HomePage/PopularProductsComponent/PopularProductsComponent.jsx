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

class PopularProductsComponent extends Component {
    render() {

        return (
            <div className="row products">
                <div className="row p-2">
                    <div className="col-lg-4 col-12 px-5 py-4" id={"div1"}>
                        <ul className="known px-4 text-left ">
                            <h1 className="d-inline-block mr-3">Popular</h1>
                            <h5 className="d-inline-block mr-5" id={"shop"}>SHOP</h5>

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

                </div>



                <div className="col-lg-3 col-12 p-5">
                <Card className=" card ">
                    <CardBody>
                        <CardImg src={pic1} alt="Card image" />

                        <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                        <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>




                    </CardBody>
                </Card >
    </div>
                 <div className="col-lg-3 col-12 p-5">
                     <Card className=" card " >
                         <CardBody>
                             <CardImg src={pic2} />

                             <CardText className={"text-left d-inline-block"}>Picklesuit </CardText>
                             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <p className={"d-inline-block"} id={"name"}>John Doelson</p>
                             <CardSubtitle className="mb-2 text-muted text-left"> 155.00$</CardSubtitle>

                         </CardBody>
                     </Card>
                 </div>
                 <div className="col-lg-3 col-12 p-5">
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
                 <div className="col-lg-3 col-12 p-5">

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
                 <div className="col-lg-3 col-12 p-5">
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
                 <div className="col-lg-3 col-12 p-5">
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
                 <div className="col-lg-3 col-12 p-5">
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
                 <div className="col-lg-3 col-12 p-5">
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


             </div>


        );
    }
}
export default PopularProductsComponent;