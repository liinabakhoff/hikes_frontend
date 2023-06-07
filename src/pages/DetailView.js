import { useParams, Link } from 'react-router-dom'

function DetailView({ hikes }) {
	const { hike_id } = useParams()
	const hike = hikes.find((item) => item.id === parseInt(hike_id, 10))
	console.log('0hike_id', hike_id)
	console.log('1hikes', hikes)
	console.log('2hike', hike)
	if (hikes?.length < 1) {
		return <div>Laen postitusi</div>
	}
	return (
		<div>
			<div className='admin-only d-flex justify-content-end'>
				<Link to='./edit'>Edit</Link>
			</div>
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
