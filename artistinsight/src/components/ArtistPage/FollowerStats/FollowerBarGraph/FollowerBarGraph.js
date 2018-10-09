import React from 'react';
import FollowerBar from './FollowerBar';

const FollowerBarGraph = () => {
	return (
		<div className='followerBarGraph'>
			<FollowerBar followers='35.5m' metric='facebook' />
			<FollowerBar followers='47.3m' metric='instagram' />
			<FollowerBar followers='26.4m' metric='spotify' />
			<FollowerBar followers='16.9m' metric='youtube' />	
		</div>
	)
}

export default FollowerBarGraph;