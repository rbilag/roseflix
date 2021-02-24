import React, { useState } from 'react';
import { Player } from '../components';
import { usePlayer } from '../context/PlayerContext';
import { LockBody } from '../components/loading/styles/loading';

function PlayerContainer() {
	const { playing, setPlaying } = usePlayer();
	const [ isPaused, setIsPaused ] = useState();

	return (
		<Player>
			{isPaused && (
				<React.Fragment>
					<Player.Overlay />
					<Player.Details>
						<p>You're watching</p>
						<Player.Title>{playing.name || playing.title || playing.original_name}</Player.Title>
						<p>{playing.overview}</p>
					</Player.Details>
					<p className="paused-text">Paused</p>
				</React.Fragment>
			)}
			<Player.Video setIsPaused={setIsPaused} />
			<Player.Back onClick={() => setPlaying()} />
			<LockBody />
		</Player>
	);
}

export default PlayerContainer;
