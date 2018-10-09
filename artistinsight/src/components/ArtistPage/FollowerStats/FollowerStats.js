import React from 'react';
import FollowerBarGraph from './FollowerBarGraph';
import FollowerLineGraph from './FollowerLineGraph';

const FollowerStats = () => {
	return (
		<div className='followerStats'>
			<FollowerBarGraph />
			<FollowerLineGraph />	
		</div>
	)
}

export default FollowerStats;