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
    this.state = { 
      value: '',
      onSearching: false
    };
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  //quando enviar, preciso mandar pra /abc
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({onSearching: true});
  }

  render() {
    if (this.state.onSearching === true){
      const value = this.state.value;
      this.setState({onSearching: false});
      return (<Redirect to={`/items?search=${value}`} />)
    }

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