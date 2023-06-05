import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HikeCard from './Components/HikeCard'

function ListOfHikes({ hikes }) {
	return (
		<Container className='mb-5'>
			<Row xs={1} md={2} lg={3} className='g-4'>
				{hikes.map((hike, index) => {
					return (
						<Col key={index}>
							<HikeCard hike={hike}></HikeCard>
						</Col>
					)
				})}
			</Row>
		</Container>
	)
}
export default ListOfHikes
