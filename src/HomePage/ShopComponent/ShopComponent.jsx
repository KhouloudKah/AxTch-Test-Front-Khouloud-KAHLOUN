import React, { Component } from 'react';
import './ShopComponent.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import chair from '../../Images/chair.png';
import pic2 from '../../Images/pic2.PNG';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


class ShopComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {

        return (


                <div className="py-5">
                    <div className="view w-100">
                        <div className="row">
                            <Slider autoplay={3000} >
                                <div className="row">

                            <div className="col-lg-4 col-12 px-5 py-5" id="div1">
                                <h1 className="col-lg-4 col-12" >Shop</h1>
                                <div className="vl1"></div>

                                <ul className="nav flex-column align-items-start">
                                    <li className="nav-item " >
                                        <a  id={"nav-link-active"} className="btn btn-black" href="#/"
                                          >Home Furnishings</a>
                                    </li>
                                    <li className="nav-item " id={"nav-link"}>
                                        <a  id={"link"} className="btn btn-black disabled" href="#/"  >Accessories</a>
                                    </li>
                                    <li className="nav-item " id={"nav-link"}>
                                        <a id={"link"} className="btn btn-black disabled" href="#/" >Sport</a>
                                    </li>
                                    <li className="nav-item" id={"nav-link"}>
                                        <a  id={"link"} className="btn btn-black disabled" href="#/" >Clothing wear</a>

                                    </li>
                                </ul>

                            </div>

                            <div className="col-lg-4 col-12">
                                   <img className="d-block w-100" src={chair}  alt={"Clothing wear"}/>

                            </div>
                            <div className="col-lg-4 col-12 py-xl-5 ">
                                <p>Limited Edition</p>
                                <h1 id={"white_clock"}>White Clock</h1>
                                <div className="d-flex align-items-end flex-column">
                                    <div className="mt-auto p-5">
                                        <a id={"btn_shop"} href="#/" className="btn  btn-large px-5">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-4 col-12  px-5 py-5" id="div1">
                                        <h1 className="col-lg-4 col-12" >Shop</h1>
                                        <div className="vl1"></div>

                                        <ul className="nav flex-column align-items-start">
                                            <li className="nav-item " >
                                                <a  id={"link"} className="btn btn-black disabled"
                                                    href="#/">Home Furnishings</a>
                                            </li>
                                            <li className="nav-link-active " id={"nav-link"}>
                                                <a  id={"nav-link-active"} className="btn btn-black "  href="#/">Accessories</a>
                                            </li>
                                            <li className="nav-item " id={"nav-link"}>
                                                <a id={"link"} className="btn btn-black disabled" href="#/">Sport</a>
                                            </li>
                                            <li className="nav-item" id={"nav-link"}>
                                                <a  id={"link"} className="btn btn-black disabled" href="#/">Clothing wear</a>

                                            </li>
                                        </ul>

                                    </div>

                                    <div className="col-lg-4 col-12">
                                        <img className="d-block w-100" src={pic2}  alt={"Clothing wear"}/>

                                    </div>
                                    <div className="col-lg-4 col-12 py-xl-5 ">
                                        <p>Limited Edition</p>
                                        <h1 id={"white_clock"}>White Clock</h1>
                                        <div className="d-flex align-items-end flex-column">
                                            <div className="mt-auto p-5">
                                                <a id={"btn_shop"} href="#/" className="btn  btn-large px-5">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-4 col-12 px-5 py-5" id="div1">
                                        <h1 className="col-lg-4 col-12" >Shop</h1>
                                        <div className="vl1"></div>

                                        <ul className="nav flex-column align-items-start">
                                            <li className="nav-item " >
                                                <a  id={"link"} className="btn btn-black disabled"
                                                    href="#/">Home Furnishings</a>
                                            </li>
                                            <li className="nav-item " id={"nav-link"}>
                                                <a  id={"link"} className="btn btn-black disabled"  href="#/">Accessories</a>
                                            </li>
                                            <li className="nav-item disabled" id={"nav-link"}>
                                                <a id={"nav-link-active"} className="btn btn-black " href="#/">Sport</a>
                                            </li>
                                            <li className="nav-item" id={"nav-link"}>
                                                <a  id={"link"} className="btn btn-black disabled" href="#/">Clothing wear</a>

                                            </li>
                                        </ul>

                                    </div>

                                    <div className="col-lg-4 col-12">
                                        <img className="d-block w-100" src={chair}  alt={"Clothing wear"}/>

                                    </div>
                                    <div className="col-lg-4 col-12 py-xl-5 ">
                                        <p>Limited Edition</p>
                                        <h1 id={"white_clock"}>White Clock</h1>
                                        <div className="d-flex align-items-end flex-column">
                                            <div className="mt-auto p-5">
                                                <a id={"btn_shop"} href="#/" className="btn  btn-large px-5">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-4 col-12 px-5 py-5" id="div1">
                                        <h1 className="col-lg-4 col-12" >Shop</h1>
                                        <div className="vl1"></div>

                                        <ul className="nav flex-column align-items-start">
                                            <li className="nav-item " >
                                                <a  id={"link"} className="btn btn-black disabled"
                                                    href="#/">Home Furnishings</a>
                                            </li>
                                            <li className="nav-item " id={"nav-link"}>
                                                <a  id={"link"} className="btn btn-black disabled"  href="#/">Accessories</a>
                                            </li>
                                            <li className="nav-item disabled" id={"nav-link"}>
                                                <a id={"link"} className="btn btn-black disabled " href="#/">Sport</a>
                                            </li>
                                            <li className="nav-item" id={"nav-link"}>
                                                <a  id={"nav-link-active"} className="btn btn-black " href="#/">Clothing wear</a>

                                            </li>
                                        </ul>

                                    </div>

                                    <div className="col-lg-4 col-12">
                                        <img className="d-block w-100" src={chair}  alt={"Clothing wear"}/>

                                    </div>
                                    <div className="col-lg-4 col-12 py-xl-5 ">
                                        <p>Limited Edition</p>
                                        <h1 id={"white_clock"}>White Clock</h1>
                                        <div className="d-flex align-items-end flex-column">
                                            <div className="mt-auto p-5">
                                                <a id={"btn_shop"} href="#/" className="btn  btn-large px-5">Shop Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </Slider>


                        </div>
                    </div>

                </div>



        );
    }
}
export default ShopComponent;

