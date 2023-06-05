import { useParams } from 'react-router-dom'

function DetailView({ hikes }) {
	const { hike_id } = useParams()
	if (hikes?.length < 1) {
		return <div>Laen postitusi</div>
	}
	return (
		<div>
			Näitan matka id-ga <b>{hike_id}</b>
		</div>
	)
}

export default DetailView
