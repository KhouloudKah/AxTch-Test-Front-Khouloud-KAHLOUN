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
        <div className="container-fluid" id={"div11"}>

            <div className="row">
                <div className="col-12">
                    <HeadComponent />




                    <ShopComponent />
                    <OutdoorsIndoorsComponent />
                    <PopularProductsComponent />
                    <CollectionComponent />

                    <div className="row p-3">

                    </div>


                    <NewsletterComponent />

                    <div className="row justify-content-around">

                        <div className="col-4">
                            If you need help click on this button
                        </div>
                        <div className="col-4">
                            <Button variant="dark"
                                    onClick={() => this.open(true)}>
                                Need Help ?
                            </Button>
                        </div>

                        <ModalComponent
                            show={this.state.showModal}
                            close={() => this.close()}
                            onHide={() => this.close()}

                        />
                    </div>
                    <br/>
                    <br/>
                    <br/>

                    <FooterComponent/>



                        <br/>

                </div>

                </div>

        </div>

  );
  }
}
export default HomePage