import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import NavbarHikes from './Components/NavbarHikes'

function Layout() {
	return (
		<>
			<Container fluid>
				<Row>
					<NavbarHikes></NavbarHikes>
				</Row>
			</Container>
			<Container className='mb-4'>
				<Outlet />
			</Container>
		</>
	)
}

export default Layout
