import React from 'react'
import ReactDOM from 'react-dom'
import 'sanitize.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import Styletron from 'styletron-client'
import { StyletronProvider } from 'styletron-react'

ReactDOM.render(
	<StyletronProvider styletron={new Styletron()}>
		<App />
	</StyletronProvider>,
	document.getElementById('root')
)
registerServiceWorker()
