import React from 'react';
import { Redirect, withRouter } from 'react-router-dom'
import PropTypes from "prop-types";
import { createBrowserHistory } from 'history';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  InputGroup, 
  InputGroupAddon,
  Button,
  Input,
  DropdownItem } from 'reactstrap';


export default class SearchBar extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  //quando enviar, preciso mandar pra /abc
  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.state.value;
    createBrowserHistory().replace(`/items?search=${value}`) //usando lib history
  }

  render() {
    return (
      <div>
        <Navbar color="dark" expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <form onSubmit={this.handleSubmit} to='abc  '>
                <InputGroup>
                  <Input value={this.state.value} onChange={this.handleChange} />
                  <InputGroupAddon addonType="append">
                    <Button color="secondary">GO!</Button>
                  </InputGroupAddon>
                </InputGroup>
              </form>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}