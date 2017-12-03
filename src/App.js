import React from 'react';
import {Emoji, Emojis } from './emoji';

function App() {
	return (
		<Emojis cat>
			<Emoji emotion = "happy"/>
			<Emoji emotion = "sad"/>
			<Emoji/>
			<Emoji emotion = "angry"/>
			<Emoji emotion = "sad"/>
		</Emojis>
	)
}

export default App