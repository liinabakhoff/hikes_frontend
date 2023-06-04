import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import ListOfHikes from './ListOfHikes'

function App() {
	const [hikes, setHikes] = useState([])

	useEffect(() => {
		fetch('http://localhost:10000/api/treks')
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log('response', data)
				setHikes(data)
			})
			.catch(() => {
				console.log('fail')
			})
	}, [])

	return (
		<>
			<Container fluid>
				<Row>
					<Navbar bg='light' variant='light' className='mb-4'>
						<Container>
							<Navbar.Brand href='/'>Matkad</Navbar.Brand>
							<Nav className='me-auto'>
								<Nav.Link href='/'>Home</Nav.Link>
								<Nav.Link href='/'>Kontakt</Nav.Link>
							</Nav>
						</Container>
					</Navbar>
				</Row>
			</Container>
			<ListOfHikes hikes={hikes}></ListOfHikes>
		</>
	)
}

export default App
