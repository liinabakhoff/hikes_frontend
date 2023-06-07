import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function NavbarHikes() {
	return (
		<Navbar bg='light' variant='light' className='mb-4'>
			<Container>
				<Navbar.Brand>
					<Link className='text-decoration-none text-secondary' to='/hikes_frontend'>
						MATKAD
					</Link>
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Link className='text-decoration-none text-secondary mx-2' to='/hikes_frontend'>
						Home
					</Link>
					<Link
						className='text-decoration-none text-secondary mx-2'
						to='/hikes_frontend/contact'
					>
						Contact
					</Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavbarHikes
