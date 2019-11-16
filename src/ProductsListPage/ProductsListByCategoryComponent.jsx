import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  getProductsByCategory } from '../Store/actions/ProductsAction';
import ProductItemComponent from './ProductItemComponent'
import MenuComponent from "../HomePage/HeaderComponent/MenuComponent";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import './ProductsListComponent.scss';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ProductsListComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dropdownOpen : false,
            value : ""


        }
    }

    toggle() {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    select(event) {
            this.setState({
                dropdownOpen: !this.state.dropdownOpen,
                value: event.target.textContent
            });
            this.props.getProductsByCategory(event.target.textContent);

        }



    render() {

        return (

            <div>
                <div className="row px-2 py-5 justify-content-between">
                    <div className="col-4" id="divStyle">
                        <div className="d-inline-block mr-5">
                            <MenuComponent/>
                        </div>
                    </div>


                    <div className="col-4 " id = "rightitems">
                        <div className="d-inline-block mr-5"><FontAwesomeIcon icon={faSearch} /></div>
                    </div>
                </div>
                <div className="row px-2 py-2 justify-content-between">
                    <div className="col-4" id="rightitems">
                        <div className="d-inline-block mr-5">
                            Home -- H2

                        </div>
                    </div>

                </div>

                <div className="row px-2 py-4 justify-content-between">
                    <div className="col-4" id="rightitems">
                        <div className="d-inline-block mr-5">
                            Home Decor

                        </div>
                    </div>

                    <div className="col-4 ">
                        <div className="d-inline-block mr-5">
                            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => {this.toggle()}}>
                                <DropdownToggle caret>
                                    Filter by
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem  onClick={(event) => {this.select(event)}}>kitchen</DropdownItem>
                                    <DropdownItem  onClick={(event) => {this.select(event)}}>Decor</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </div>
                    </div>                    </div>

                <div className="row px-2 py-4 ">
                    <div className="col-4" id="rightitems">
                        <div className="d-inline-block mr-5">
                            {this.state.value}
                        </div>
                    </div>
                </div>
                <div className='row px-2 py-5'>

                    {
                        this.props.products_list_by_category  &&
                        this.props.products_list_by_category.map(function(item, i){
                            return (

                                <ProductItemComponent
                                    key={i}
                                    picture = {item.img}
                                    name = {item.name}
                                    title = {item.title}
                                    price = {item.price}
                                />
                            ) ;
                        })


                    }
                </div>
                <div className="row">
                    <div className="col">
                        Previous
                    </div>
                    <div className="col-6">
                        1/8
                    </div>
                    <div className="col">
                        Next
                    </div>            </div>
                <br/>
            </div>



        );
    }
}
const mapStateToProps = state => ({
    products_list_by_category : state.products.products_list_by_category
});

export default  connect( mapStateToProps,{ getProductsByCategory})(ProductsListComponent)

