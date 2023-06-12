import { useEffect, useState, createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import ListView from './pages/ListView'
import DetailView from './pages/DetailView'
import EditDetailView from './pages/EditDetailView'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

//const url = 'https://liina-matkad-app.onrender.com/api/treks'
const url = 'http://localhost:10000/api/treks'

export const AppContext = createContext()

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
		<AppContext.Provider value={{ hikes, setHikes }}>
			<BrowserRouter>
				<Routes>
					<Route path='/hikes_frontend/' element={<Layout />}>
						<Route index element={<ListView />}></Route>
						<Route path='/hikes_frontend/contact' element={<Contact />}></Route>
						<Route
							path='/hikes_frontend/trek/:hike_id'
							element={<DetailView />}
						></Route>
						<Route
							path='/hikes_frontend/trek/:hike_id/edit'
							element={<EditDetailView />}
						></Route>
						<Route
							path='/hikes_frontend/admin/:hike_id'
							element={<Admin url={url}></Admin>}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App
