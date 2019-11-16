import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faFacebook} from '@fortawesome/fontawesome-free-brands';

class FooterComponent extends Component {



    render() {

        return (

                <div className="row">
                    <div className="col">
                        Copyright Minim Website 2016
                    </div>
                    <div className="col-6">
                        FIRST  &nbsp; &nbsp;&nbsp;SECOND&nbsp; &nbsp;&nbsp;THIRD&nbsp;&nbsp;&nbsp; FOURTH&nbsp; &nbsp;&nbsp;FIFTH&nbsp;&nbsp;&nbsp; SIXTH

                    </div>
                    <div className="col">
                        <div>
                            <div className="d-inline-block mr-3 "><FontAwesomeIcon icon={faTwitter} /></div>
                            <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className="d-inline-block mr-3"><FontAwesomeIcon icon={faFacebook} /></div>
                        </div>
                    </div>            </div>


        );
    }
}
export default FooterComponent;