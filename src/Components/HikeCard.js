import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

function HikeCard({ hike }) {
	const navigate = useNavigate()

	return (
		<Card
			className='hike-card'
			onClick={() => {
				navigate('/hikes_frontend/trek/' + hike.id)
			}}
		>
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
	)
}

export default HikeCard
