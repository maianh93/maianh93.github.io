import { Link, NavLink } from "react-router-dom";
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Menu, Segment } from 'semantic-ui-react'
import "./Header.css"

export default class Header extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing secondary>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Menu.Item
                            name='home'
                            // active={activeItem === 'home'}
                            onClick={this.handleItemClick}
                    /></NavLink>
                    <NavLink to="/categories" style={{ textDecoration: 'none' }}>
                        <Menu.Item
                            name='categories'
                            // active={activeItem === 'categories'}
                            onClick={this.handleItemClick}
                    /></NavLink>
                    <NavLink to="/product-detail" style={{ textDecoration: 'none' }}>
                        <Menu.Item
                            name='product-detail'
                            // active={activeItem === 'product-detail'}
                            onClick={this.handleItemClick}
                    /></NavLink>


                    <Menu.Menu position='right'>
                        <NavLink to="/cart" style={{ textDecoration: 'none' }}>
                            <Menu.Item
                                name='cart'
                                // active={activeItem === 'cart'}
                                onClick={this.handleItemClick}
                        /></NavLink>
                        <Menu.Item
                            name='log-out'
                            // active={activeItem === 'log-out'}
                            onClick={this.handleItemClick}
                        />

                    </Menu.Menu>
                </Menu>
            </div>
        )
    }
}