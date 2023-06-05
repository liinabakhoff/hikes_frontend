import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavbarHikes() {
	return (
		<Navbar bg='light' variant='light' className='mb-4'>
			<Container>
				<Navbar.Brand href='/'>Matkad</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/'>Home</Nav.Link>
					<Nav.Link href='/'>Kontakt</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default NavbarHikes
