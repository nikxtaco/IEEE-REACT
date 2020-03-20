import React from 'react';

import { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {

	useEffect(() => {
		let sidenav = document.querySelector('#slide-out');
		M.Sidenav.init(sidenav, {});

	}, [])

	return (

		<div class="row">
			<div class="navbar-fixed">
				<div className='Navbar'>
					<nav className="nav-wrapper white accent-1">
	
							{/*<a href="https://google.com" id="logo" style={{'color':'black',}} class="left col l2 ">Logo</a>
							<a href="https://google.com" data-target="slide-out" class="sidenav-trigger" style={{'color':'black'}}><i class="material-icons">Menu</i></a>*/}
							<div className="container">
								<ul className="right hide-on-small-and-down">
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>About</a></li>
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>Home</a></li>
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>Achievements</a></li>
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>Gallery</a></li>
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>Our Team</a></li>
									<li><a href='/' style={{'color':'rgb(29, 60, 98)'}}>Contact</a></li>
								</ul>
							</div>
			
					</nav>

					<ul id="slide-out" class="sidenav">
						<li><a className='text-darken-3' href='/'>About</a></li>
						<li><a className='text-darken-3' href="/">Home</a></li>
						<li><a className='text-darken-3' href="/">Achievements</a></li>
						<li><a className='text-darken-3' href="/">Gallery</a></li>
						<li><a className='text-darken-3' href="/">Our Team</a></li>
						<li><a className='text-darken-3' href="/">Contact</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
