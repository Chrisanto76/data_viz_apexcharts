import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
	return (
		<div>
			<Navbar expand="lg" className="bg-body-light mb-4">
				<Container>
					<Navbar.Brand className="fs-1 text-secondary">
						Use case Seiki
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse
						id="basic-navbar-nav"
						className="justify-content-end"
					>
						<Nav className="">
							<Nav.Link href="https://apexcharts.com/">Apexcharts-doc</Nav.Link>
							<Nav.Link href="https://api.seiki.co/">Seiki-Api</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
