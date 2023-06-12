import { useContext } from 'react'
import { AppContext } from '../App'

function AdminSidebar({ handleListItemChange, activeListItem }) {
	const { hikes } = useContext(AppContext)
	console.log('AdminSidebar | hikes:', hikes)
	console.log('AdminSidebar | activeListItem:', activeListItem)
	return (
		<aside id='admin-sidebar'>
			<ul id='admin-navigation'>
				{hikes.map((hike) => {
					const key = 'list-item-' + hike.id
					return (
						<li
							className={
								activeListItem === hike.id ? 'active list-item' : 'list-item'
							}
							key={key}
							onClick={() => handleListItemChange(hike.id)}
						>
							{hike.name}
						</li>
					)
				})}
			</ul>
			<div
				id='add-new-hike-button'
				className={activeListItem === 'new' ? 'active' : ''}
				onClick={() => {
					handleListItemChange('new')
				}}
			>
				Lisa uus matk
			</div>
		</aside>
	)
}
export default AdminSidebar
