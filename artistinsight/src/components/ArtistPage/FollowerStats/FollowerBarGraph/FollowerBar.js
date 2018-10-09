import React from 'react';

const FollowerBar = (props) => {
	return (
		<div className={`fBar ${props.metric}Bar`}>
			<p className='followers'>{props.followers}</p>
			<i className={`barIcon fa fa-${props.metric}`}></i>
		</div>
	)
}

export default FollowerBar;