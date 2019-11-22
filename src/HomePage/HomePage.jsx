import React, { Component } from 'react';
import './HomePage.scss';
import HeadComponent from './HeaderComponent/HeadComponent.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import OutdoorsIndoorsComponent from "./OutdoorsIndoorsComponent/OutdoorsIndoorsComponent";
import PopularProductsComponent from "./PopularProductsComponent/PopularProductsComponent";
import ShopComponent from './ShopComponent/ShopComponent';
import CollectionComponent from "./CollectionComponent/CollectionComponent";
import NewsletterComponent from "./NewsletterComponent/NewsletterComponent";
import FooterComponent from "./FooterComponent/FooterComponent";
import ModalComponent from "./ModalComponent/ModalComponent";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal : false
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
        <Container id={"pageHome"}>

            <Row className="row p-5">
                <Col className="col-12">
                    <HeadComponent />




                    <ShopComponent />

                    <Row className="row p-3" px={1} py={0} >

                    <OutdoorsIndoorsComponent />
                    </Row>

                    <PopularProductsComponent />
                    <div className="row p-3">
                    <CollectionComponent />
                    </div>

                    <div className="row p-3">

                    </div>


                    <NewsletterComponent />
                    <Row className="row p-3">
                    </Row>

                    <Row className="row justify-content-center">

                        <Col className="col-4">
                            If you need help click on this button
                        </Col>
                        <Col className="col-4">
                            <Button variant="dark"
                                    onClick={() => this.open(true)}>
                                Need Help ?
                            </Button>
                        </Col>
                    </Row>

                    <ModalComponent
                            open={this.state.showModal}
                            close={() => this.close()}
                            onHide={() => this.close()}

                        />

                    <br/>
                    <br/>
                    <br/>

                    <FooterComponent/>



                        <br/>

                </Col>

                </Row>

        </Container>

  );
  }
}
export default HomePage