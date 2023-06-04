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
								<Card.Img variant='top' src={hike.image_url} />
								<Card.Body>
									<Card.Title>
										{hike.name}
										<br />
										{hike.start_time} - {hike.end_time}
									</Card.Title>

									<Card.Text>
										Lat {hike.latitude} Long {hike.longitude}
									</Card.Text>
									<Card.Text>{hike.description}</Card.Text>
									<Card.Text>Osalus: {hike.price}€</Card.Text>
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
