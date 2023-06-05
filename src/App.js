import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import ListView from './pages/ListView'
import DetailView from './pages/DetailView'
import Contact from './pages/Contact'

const url = 'https://liina-matkad-app.onrender.com/api/treks'

function App() {
	const [hikes, setHikes] = useState([])

	useEffect(() => {
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log('response', data)
				setHikes(data)
			})
			.catch(() => {
				console.log('fail')
			})
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/nort-hikes_react-refresher/' element={<Layout />}>
					<Route index element={<ListView hikes={hikes}></ListView>}></Route>
					<Route path='/nort-hikes_react-refresher/contact' element={<Contact />}></Route>
					<Route
						path='/nort-hikes_react-refresher/trek/:hike_id'
						element={<DetailView hikes={hikes}></DetailView>}
					></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
