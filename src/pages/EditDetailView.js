import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// TODO: Create generic input components, maybe use useContext hook. https://plainenglish.io/blog/creating-a-generic-text-input-component-with-react
// TODO: Validation - front or backend?

function EditDetailView({ hikes }) {
	const [editedHike, setEditedHike] = useState({
		name: '',
		latitude: '',
		longitude: '',
		price: '',
		image_url: '',
		start_time: '',
		end_time: '',
		description: '',
	})

	const { hike_id } = useParams()

	useEffect(() => {
		const myHike = hikes.find((item) => item.id === parseInt(hike_id, 10))
		if (myHike !== undefined) {
			setEditedHike(myHike)
		}
	}, [hikes, hike_id])

	const handleSetEditedHike = (key, value) => {
		setEditedHike((prevState) => {
			return { ...prevState, [key]: value }
		})
	}

	const handleTextInputChange = (event) => {
		handleSetEditedHike(event.target.name, event.target.value)
	}

	return (
		<Form>
			<Form.Group className='mb-3'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					name='name'
					type='text'
					value={editedHike.name}
					onChange={handleTextInputChange}
				/>
			</Form.Group>

			<Row className='mb-3'>
				<Form.Group as={Col} className='mb-3'>
					<Form.Label>Start time</Form.Label>
					<Form.Control
						name='start_time'
						type='text'
						value={editedHike.start_time}
						onChange={handleTextInputChange}
					/>
				</Form.Group>

				<Form.Group as={Col} className='mb-3'>
					<Form.Label>End time</Form.Label>
					<Form.Control
						name='end_time'
						type='text'
						value={editedHike.end_time}
						onChange={handleTextInputChange}
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
						onChange={handleTextInputChange}
					/>
				</Form.Group>

				<Form.Group as={Col} className='mb-3'>
					<Form.Label>Longitude</Form.Label>
					<Form.Control
						name='longitude'
						type='text'
						value={editedHike.longitude}
						onChange={handleTextInputChange}
					/>
				</Form.Group>
			</Row>

			<Form.Group className='mb-3'>
				<Form.Label>Price info</Form.Label>
				<Form.Control
					name='price'
					type='text'
					value={editedHike.price}
					onChange={handleTextInputChange}
				/>
			</Form.Group>
		</Form>
	)
}

export default EditDetailView
