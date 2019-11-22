import React, { Component } from 'react';
import './HeaderComponent.scss';
import MenuComponent from "./MenuComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingCart  } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HeadComponent extends Component {


  
  render() {
    
    return (
        <Container>

        <Row >
            <Col className="col-3" id="divStyle">
                <div className="d-inline-block mr-5">
                    <MenuComponent/>
                </div>
                <div className="d-inline-block mr-5"><FontAwesomeIcon icon={faSearch} /></div>
            </Col>
            <Col className="col-6">
                <h2 id="minim">minim</h2>
            </Col>
            <Col className="col-3" id = "rightitems">
                    <div className="d-inline-block mr-5" id={"account"}>ACCOUNT</div>
                    <div className="d-inline-block mr-5"><FontAwesomeIcon icon={faShoppingCart} /></div>
            </Col>
        </Row>


        </Container>



  );
  }
}
export default HeadComponent