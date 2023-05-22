import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

function ListOfHikes({ hikes }) {
	return (
		<Container className='mb-5'>
			<Row xs={1} md={2} lg={3} className='g-4'>
				{hikes.map((hike, index) => {
					return (
						<Col key={index}>
							<Card>
								<Card.Img variant='top' src={hike.images[0].url} />
								<Card.Body>
									<Card.Title>
										{hike.title}, {hike.lengthKm}km
										<br />
										{hike.date}
									</Card.Title>

									<Card.Text>
										Lat {hike.lat} Long {hike.long} <br />
										{hike.county}
									</Card.Text>
									<Card.Text>{hike.description}</Card.Text>
									<Card.Text>Matkajuht: {hike.coordinator}</Card.Text>
									<Card.Text>Osalus: {hike.priceEur}€</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}
export default ListOfHikes
