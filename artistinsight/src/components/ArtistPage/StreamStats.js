import React from 'react';

const StreamStats = () => {
	return (
		<div className='streamStats'>
			<div className='streamData'>
				<p><i className='spotifyLogo fa fa-spotify'></i> Popularity: <span className='streamPop'>100/100</span></p>
				<p><i className='spotifyLogo fa fa-spotify'></i> Playlists Total Reach: <span className='streamPts'>3,238,473,828</span></p>
				<p><i className='spotifyLogo fa fa-spotify'></i> Monthly Listeners: <span className='streamMl'>56,176,044</span></p>
				<p><i className='youtubeLogo fa fa-youtube'></i> Total Video Views: <span className='streamTvv'>2,738,283,918</span></p>
				<p><i className='youtubeLogo fa fa-youtube'></i> Average Video Views: <span className='streamAvv'>100,387,298</span></p>
			</div>
		</div>
	)
}

export default StreamStats;