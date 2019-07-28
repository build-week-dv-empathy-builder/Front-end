import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function(props) {
	const {
		component: Component, 
		...rest 
	} = props

	return (
		<Route {...rest} render={() => {
			const token = '1234' // CHANGE THIS WHEN READY

			return token
				? <Component />
				: <Redirect to="/login" />
		}} />
	)
}