import React from 'react';
import ArtistBio from './ArtistBio';
import StreamStats from './StreamStats';
import FollowerStats from './FollowerStats/FollowerStats';

const ArtistPage = () => {
	return (
		<div className='artistPage'>
			<ArtistBio />
			<StreamStats />
			<FollowerStats />
		</div>
	)
}

export default ArtistPage;