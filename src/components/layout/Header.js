import React from "react";
import { Link, withRouter } from "react-router-dom";
// REACT-BOOTSTRAP
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Header = (props) => {
	return (
		<header>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to={`/`} className={`nav-link`}>
							Home
						</Link>
						<Link to={`/about`} className={`nav-link`}>
							About
						</Link>
					</Nav>
					<Form inline>
						<Form.Control
							type="text"
							placeholder="Search"
							className="mr-sm-2"
						/>
						<Button variant="outline-success">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default withRouter(Header);
