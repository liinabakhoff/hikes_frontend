const http = require('http')

const host = 'localhost'
const port = 8000

const hikes = [
	{
		title: 'Elistvere õpperada',
		county: 'Tartumaa',
		coordinator: 'Eva Luigas',
		date: '31.05.2023',
		priceEur: 3,
		images: [
			{
				url: 'https://media.voog.com/0000/0030/9870/photos/elistvere%20%C3%B5pperada.jpg',
				cover: true,
			},
		],
		description:
			'Loomapargist algav edasi-tagasi käimistega kokku umbes 2 km pikkune rada asub loomapargi territooriumil ja sobib mõnusaks jalutuskäiguks loomapargi külastajale. Järveni on rada kasutatav ka ratastooliga. Rajal saab tutvuda kohapealse elustikuga, abiks teabetahvlid ja vaateplatvormid, järve-äärses vaatetornis linnuteave.',
		participants: [
			{
				firstName: 'Liina',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jüri',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jaan',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Joosep',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Teele',
				lastName: 'Suurup',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Maire',
				lastName: 'Kolsar',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Paul',
				lastName: 'Petrovski',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
		],
		lat: 58.5762472,
		long: 26.688025,
		lengthKm: 2,
	},
	{
		title: 'Jussi loodusrada',
		county: 'Harjumaa',
		coordinator: 'Teet Margna',
		date: '03.06.2023',
		priceEur: 2,
		images: [
			{
				url: 'https://media.voog.com/0000/0030/9870/photos/Jussi%20LR-1.jpg',
				cover: true,
			},
			{
				url: 'https://media.voog.com/0000/0030/9870/photos/Jussi%20LR2.jpg',
			},
			{
				url: 'https://media.voog.com/0000/0030/9870/photos/Jussi%20n%C3%B5mm.jpg',
				title: 'Jussi nõmm',
			},
		],
		description:
			'Loodusrada on äärmiselt vaheldusrikka maastiku ja loodusega. Rada kulgeb üles-alla mööda Jussi järvede äärde jäävaid oose ning viib matkaja ka Jussi nõmmele. Jussi nõmm on Eestis ainulaadne looduskooslus, mis on tekkinud Nõukogude armee tegevusest tingitud korduvate põlengute tagajärjel. Rada on tähistatud kollaste värvimärkidega.',
		participants: [
			{
				firstName: 'Liina',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jüri',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jaan',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Joosep',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Teele',
				lastName: 'Suurup',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Maire',
				lastName: 'Kolsar',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Paul',
				lastName: 'Petrovski',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
		],
		lat: 59.360448,
		long: 25.688783,
		lengthKm: 8,
	},
	{
		title: 'Mukri loodusrada',
		county: 'Raplamaa',
		coordinator: 'Hans H. Luik',
		date: '21.06.2023',
		priceEur: 2,
		images: [
			{
				url: 'https://media.voog.com/0000/0030/9870/photos/mukri1.jpg',
				cover: true,
			},
		],
		description:
			'Rada kulgeb mööda Mukri raba, möödudes rohketest laugastest ja rabajärvedest ning pakkudes ilusaid vaateid vaatetornist.',
		participants: [
			{
				firstName: 'Liina',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jüri',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Jaan',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Joosep',
				lastName: 'Bakhoff',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Teele',
				lastName: 'Suurup',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Maire',
				lastName: 'Kolsar',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
			{
				firstName: 'Paul',
				lastName: 'Petrovski',
				phone: '+37211111',
				email: 'example@gmail.com',
				paid: true,
			},
		],
		lat: 58.746752,
		long: 24.975231,
		lengthKm: 2.5,
	},
]

const requestListener = function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Content-Type', 'application/json')
	res.writeHead(200)
	res.end(JSON.stringify(hikes))
}

const server = http.createServer(requestListener)
server.listen(port, host, () => {
	console.log(`Server is running on http://${host}:${port}`)
})
