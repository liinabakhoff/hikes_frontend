import AdminSidebar from '../Components/AdminSidebar'
import EditHike from '../Components/EditHike'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import '../pages/admin.css'

function Admin({ url }) {
	const navigate = useNavigate()

	const [activeListItem, setActiveListItem] = useState('new')

	const handleListItemChange = (listItemClicked) => {
		console.log('clicked on: ', listItemClicked)
		setActiveListItem(listItemClicked)
		navigate('/hikes_frontend/admin/' + listItemClicked)
	}

	const { hike_id } = useParams()
	const hikeId = hike_id === 'new' ? hike_id : parseInt(hike_id, 10)
	const isNewHike = hikeId === 'new'

	useEffect(() => {
		if (!isNewHike) {
			setActiveListItem(hikeId)
		}
	}, [isNewHike, hikeId])

	return (
		<div id='admin'>
			<AdminSidebar
				activeListItem={activeListItem}
				handleListItemChange={handleListItemChange}
			></AdminSidebar>
			<EditHike
				activeListItem={activeListItem}
				handleListItemChange={handleListItemChange}
				url={url}
			></EditHike>
		</div>
	)
}
export default Admin
