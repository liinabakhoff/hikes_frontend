import { useParams } from 'react-router-dom'

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
			Näitan matka id-ga <b>{hike_id}</b>
			<h1>{hike?.name}</h1>
		</div>
	)
}

export default DetailView
