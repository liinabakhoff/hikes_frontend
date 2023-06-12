import Alert from 'react-bootstrap/Alert'

function HikeAlert({ alertStyle, text, show, setShow }) {
	if (show) {
		return (
			<Alert variant={alertStyle} dismissible>
				<p>{text}</p>
			</Alert>
		)
	}
}

export default HikeAlert
