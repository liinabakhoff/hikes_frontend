import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../App'

function DetailView() {
	const { hikes } = useContext(AppContext)
	const { hike_id } = useParams()
	const hike = hikes.find((item) => item.id === parseInt(hike_id, 10))
	if (hikes?.length < 1) {
		return <div>Laen postitusi</div>
	}
	return (
		<div>
			<h1>{hike.name}</h1>
			<p>
				Algus: {hike.start_time}
				<br />
				Lõpp: {hike.end_time}
			</p>
			<p>{hike.description}</p>
			<p>
				{hike.latitude}, {hike.longitude}
			</p>
			<p>Hind: {hike.price}</p>
		</div>
	)
}

export default DetailView
