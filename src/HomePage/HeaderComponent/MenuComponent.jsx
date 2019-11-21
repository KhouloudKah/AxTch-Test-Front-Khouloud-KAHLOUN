import React, { Component } from 'react';
import '../HomePage.scss';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'


class MenuComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            menuOpen: false,
            showModal : false
        }
    }

    openMenu() {
        this.setState({ menuOpen: true })
    }


    closeMenu() {
        this.setState({ menuOpen: false });


    }

    render() {

        return (

            <div>
                <CheeseburgerMenu
                    isOpen={this.state.menuOpen}
                    closeCallback={this.closeMenu.bind(this)}>
                    <div className="menu">
                       <div className="menu-item" >
                           <a href="http://localhost:3001/#/"
                               onClick={this.props.closeMenu}
                               >
HomePage
                           </a>
                           <a href="http://localhost:3001/#/product"
                               onClick={this.props.closeMenu}
                             >
Product list
                           </a>
                           <a href="http://localhost:3001/#/TopicsAndInspiration"
                              onClick={this.props.closeMenu}
                           >
                               Topics And Inspiration
                           </a>
                           <a href="http://localhost:3001/#/products_by_category"
                              onClick={this.props.closeMenu}
                           >
                               Product List By Category

                           </a>

                       </div>

                    </div>
                </CheeseburgerMenu>

                <HamburgerMenu
                    isOpen={this.state.menuOpen}
                    menuClicked={this.openMenu.bind(this)}
                    width={32}
                    height={24}
                    strokeWidth={3}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />



            </div>

        );
    }
}
export default MenuComponent;