import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HikeCard from '../Components/HikeCard'
import { useContext } from 'react'
import { AppContext } from '../App'

function ListOfHikes() {
	const { hikes } = useContext(AppContext)

	if (hikes?.length < 1) {
		return <> Laen postitusi</>
	}

	return (
		<Row xs={1} md={2} lg={3} className='g-4'>
			{hikes.map((hike) => {
				return (
					<Col key={hike.id}>
						<HikeCard hike={hike}></HikeCard>
					</Col>
				)
			})}
		</Row>
	)
}
export default ListOfHikes
