import React from 'react';
import ArtistBio from './ArtistBio';
import StreamStats from './StreamStats';
import FollowerBarGraph from './FollowerBarGraph/FollowerBarGraph';
import FollowerLineGraph from './FollowerLineGraph';

const ArtistPage = () => {
	return (
		<div>
			<p>Artist Page</p>
			<ArtistBio />
			<StreamStats />
			<FollowerBarGraph />
			<FollowerLineGraph />
		</div>
	)
}

export default ArtistPage;