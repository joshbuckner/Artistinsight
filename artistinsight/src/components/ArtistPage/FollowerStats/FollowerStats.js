import React from 'react';
import FollowerBarGraph from './FollowerBarGraph/FollowerBarGraph';
import FollowerLineGraph from './FollowerLineGraph';

const FollowerStats = () => {
	return (
		<div className='followerStats'>
			<p>Follower Stats</p>
			<FollowerBarGraph />
			<FollowerLineGraph />
		</div>
	)
}

export default FollowerStats;