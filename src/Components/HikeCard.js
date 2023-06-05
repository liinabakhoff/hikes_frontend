import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

function HikeCard({ hike }) {
	return (
		<Card>
			<Link to={'/hikes_frontend/trek/' + hike.id} hike={hike}>
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
			</Link>
		</Card>
	)
}

export default HikeCard
