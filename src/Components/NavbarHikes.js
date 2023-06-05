import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavbarHikes() {
	return (
		<Navbar bg='light' variant='light' className='mb-4'>
			<Container>
				<Navbar.Brand href='/hikes_frontend'>Matkad</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/hikes_frontend'>Home</Nav.Link>
					<Nav.Link href='/hikes_frontend/contact'>Kontakt</Nav.Link>
					<Nav.Link href='/hikes_frontend/admin'>Admin</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavbarHikes
