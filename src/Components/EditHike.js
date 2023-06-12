import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import HikeAlert from './HikeAlert'
import { useState, useEffect, useContext } from 'react'
import { AppContext } from '../App'

// TODO: Create generic input components, maybe use useContext hook. https://plainenglish.io/blog/creating-a-generic-text-input-component-with-react
// TODO: Validation

function EditHike({ activeListItem, handleListItemChange, url }) {
	const { hikes, setHikes } = useContext(AppContext)
	const initialState = {
		name: '',
		latitude: '',
		longitude: '',
		price: '',
		image_url: '',
		start_time: '',
		end_time: '',
		description: '',
	}
	const [editedHike, setEditedHike] = useState(initialState)
	const [alert, setAlert] = useState({
		alertStyle: 'success',
		text: '',
		show: false,
	})

	// Miks initialState useEffect dependency-na teeb infitite loopi?
	useEffect(() => {
		if (activeListItem === 'new') {
			setEditedHike(initialState)
		} else {
			console.log('----hikes', activeListItem, hikes)
			const myHike = hikes.find((item) => item.id === parseInt(activeListItem, 10))
			if (myHike !== undefined) {
				setEditedHike(myHike)
			}
		}
	}, [hikes, activeListItem])

	const handleSetEditedHike = (key, value) => {
		setEditedHike((prevState) => {
			return { ...prevState, [key]: value }
		})
	}

	const handleInputChange = (event) => {
		handleSetEditedHike(event.target.name, event.target.value)
	}

	const sendNewHike = async () => {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedHike),
			})
			const result = await response.json()
			console.log('Success:', result)
			const newHikeId = result[0].id
			setHikes((prevState) => {
				return [...prevState, { id: newHikeId, ...editedHike }]
			})
			handleListItemChange(newHikeId)
			setEditedHike(initialState)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const sendUpdatedHike = async () => {
		const methodUrl = url + '/' + activeListItem
		try {
			await fetch(methodUrl, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(editedHike),
			})
			setHikes((prevState) => {
				return prevState.map((hike) => {
					if (hike.id === activeListItem) {
						return { id: activeListItem, ...editedHike }
					} else {
						return hike
					}
				})
			})
		} catch (error) {
			console.error('Error:', error)
		}
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		activeListItem === 'new' ? sendNewHike() : sendUpdatedHike()
	}

	const deleteHike = async () => {
		const methodUrl = url + '/' + activeListItem
		try {
			await fetch(methodUrl, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			setHikes((prevState) => {
				return prevState.filter((hike) => {
					return hike.id !== activeListItem
				})
			})
			setAlert((prevState) => {
				return {
					...prevState,
					show: true,
					alertStyle: 'success',
					text: `${editedHike.name} succesfully deleted`,
				}
			})
			handleListItemChange(hikes[0].id)
		} catch (error) {
			console.error('Error:', error)
		}
	}

	return (
		<main className='p-4'>
			<HikeAlert alertStyle={alert.alertStyle} text={alert.text} show={alert.show} />

			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						name='name'
						type='text'
						value={editedHike.name}
						onChange={handleInputChange}
						required
					/>
				</Form.Group>

				<Row className='mb-3'>
					<Form.Group as={Col} className='mb-3'>
						<Form.Label>Start time</Form.Label>
						<Form.Control
							name='start_time'
							type='text'
							value={editedHike.start_time}
							onChange={handleInputChange}
							required
						/>
					</Form.Group>

					<Form.Group as={Col} className='mb-3'>
						<Form.Label>End time</Form.Label>
						<Form.Control
							name='end_time'
							type='text'
							value={editedHike.end_time}
							onChange={handleInputChange}
							required
						/>
					</Form.Group>
				</Row>

				<Row className='mb-3'>
					<Form.Group as={Col} className='mb-3'>
						<Form.Label>Latitude</Form.Label>
						<Form.Control
							name='latitude'
							type='text'
							value={editedHike.latitude}
							onChange={handleInputChange}
							required
						/>
					</Form.Group>

					<Form.Group as={Col} className='mb-3'>
						<Form.Label>Longitude</Form.Label>
						<Form.Control
							name='longitude'
							type='text'
							value={editedHike.longitude}
							onChange={handleInputChange}
							required
						/>
					</Form.Group>
				</Row>

				<Form.Group className='mb-3'>
					<Form.Label>Price info</Form.Label>
					<Form.Control
						name='price'
						type='text'
						value={editedHike.price}
						onChange={handleInputChange}
						required
					/>
				</Form.Group>
				<Form.Group className='mb-3'>
					<Form.Label>Image URL</Form.Label>
					<Form.Control
						name='image_url'
						type='text'
						value={editedHike.image_url}
						onChange={handleInputChange}
						required
					/>
				</Form.Group>

				<Form.Group className='mb-3'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						rows={3}
						name='description'
						value={editedHike.description || ''}
						onChange={handleInputChange}
						required
					/>
				</Form.Group>
				<div className='actions'>
					<Button variant='outline-danger' onClick={deleteHike}>
						Kustuta
					</Button>
					<Button variant='outline-secondary'>Tühista muudatused</Button>
					<Button variant='outline-primary' type='submit'>
						Save
					</Button>
				</div>
			</Form>
		</main>
	)
}

export default EditHike
