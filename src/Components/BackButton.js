import React from 'react'
import { withRouter } from 'react-router-dom'
import '../Styles/BackButton.css'

function BackButton(props) {
    return (
        <button id="back" onClick={props.history.goBack}>Back</button>
    )
}
export default withRouter(BackButton)