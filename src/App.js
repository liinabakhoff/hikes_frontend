import { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import NavbarHikes from './Components/NavbarHikes'
import ListOfHikes from './ListOfHikes'

const url = 'https://liina-matkad-app.onrender.com/api/treks'

function App() {
	const [hikes, setHikes] = useState([])

	useEffect(() => {
		fetch(url)
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
					<NavbarHikes></NavbarHikes>
				</Row>
			</Container>
			<ListOfHikes hikes={hikes}></ListOfHikes>
		</>
	)
}

export default App
