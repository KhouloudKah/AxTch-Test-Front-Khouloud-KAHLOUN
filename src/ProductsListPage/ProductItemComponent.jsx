import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText } from "reactstrap";



class ProductItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (


                <div className="col-lg-3 col-12 " >
                    <Card>
                        <CardBody>
                            <CardImg src={this.props.picture} />
                            <CardText className={"text-left d-inline-block"}>{this.props.title} </CardText>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p className={"d-inline-block"} id={"name"}>{this.props.name}</p>
                            <CardSubtitle className="mb-2 text-muted text-left">{this.props.price}</CardSubtitle>
                        </CardBody>
                    </Card>

                </div>




        );
    }
}


export default  (ProductItemComponent)

