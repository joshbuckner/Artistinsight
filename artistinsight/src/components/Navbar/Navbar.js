import React, { Component } from 'react';
import NavbarSearch from './NavbarSearch';

class Navbar extends Component {
	constructor() {
		super()
		this.state = {
			showHideSidenav: ''
		}
	}
	componentDidMount() {
	}

	render() {
		return(
			<nav className={`navbar ${this.state.showHideSidenav}`}>
				<a href='/' className="logo">Artist<span className='insight'>insight</span></a>
				<div className="navbarRight">
					<NavbarSearch />
					<a href='#' className="signOut">Sign out</a>
				</div>
				<a href="#" ref='button' className='icon' onClick={this.toggleSidenav.bind(this)}>
					<i className='fa fa-bars'></i>
				</a>
			</nav>
		)
	}
	toggleSidenav() {
		var css = (this.state.showHideSidenav === "") ? "responsive" : "";
		this.setState({"showHideSidenav":css});
	}
}

export default Navbar;