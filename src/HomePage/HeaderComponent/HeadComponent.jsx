import React, { Component } from 'react';
import './HeaderComponent.scss';
import MenuComponent from "./MenuComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch , faShoppingCart  } from '@fortawesome/free-solid-svg-icons'

class HeadComponent extends Component {


  
  render() {
    
    return (
        <div className="row px-2 py-5">
            <div className="col-3" id="divStyle">
                <div className="d-inline-block mr-5">
<MenuComponent/>
                </div>


                    <div className="d-inline-block mr-5"><FontAwesomeIcon icon={faSearch} /></div>

            </div>
            <div className="col-6">
                <h2 id="minim">minim</h2>
            </div>
            <div className="col-3" id = "rightitems">
                    <div className="d-inline-block mr-5" id={"account"}>ACCOUNT</div>
                    <div className="d-inline-block mr-5"><FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </div>







  );
  }
}
export default HeadComponent