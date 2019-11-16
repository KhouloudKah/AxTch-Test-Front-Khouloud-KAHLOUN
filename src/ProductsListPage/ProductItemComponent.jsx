import React, { Component } from 'react';
import {Card, CardBody, CardImg, CardSubtitle, CardText } from "reactstrap";
import ProductComponent from "./ProductComponent";



class ProductItemComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showModal: false,

        }
    }
    close = () =>  {
        this.setState({ showModal: false });
    }

    open = () => {
        this.setState({ showModal: true });
    }


    render() {
        return (


                <div className="col-lg-3 col-12 p-5" >
                    <Card onClick={() => this.open(true)} >
                        <CardBody>
                            <CardImg src={"http://localhost:3000"+this.props.picture}  alt="Card image" />
                            <CardText className={"text-left d-inline-block"}>{this.props.title} </CardText>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <p className={"d-inline-block"} id={"name"}>{this.props.name}</p>
                            <CardSubtitle className="mb-2 text-muted text-left">{this.props.price}</CardSubtitle>
                        </CardBody>
                    </Card>
                    <ProductComponent
                        show={this.state.showModal}
                        close={() => this.close()}
                        onHide={() => this.close()}
                        picture = {this.props.picture}
                        name = {this.props.name}
                        title = {this.props.title}
                        price = {this.props.price}

                    />
                </div>




        );
    }
}


export default  (ProductItemComponent)

