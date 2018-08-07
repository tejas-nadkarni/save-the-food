import React from 'react';

const ProgressBar = React.createClass({
	render: function () {
			if (this.props.activePoint === "1") {
				return (
						<ul className="progress-bar">
							<li className="active">
								<span className="connector"></span>
								<span className="dot"></span>
							</li>
							<li>
								<span className="connector"></span>
								<span className="dot"></span>		
							</li>
							<li>
								<span className="dot"></span>		
							</li>
						</ul>
					)
			} else if (this.props.activePoint === "2"){
				return (
						<ul className="progress-bar">
							<li>
								<span className="connector"></span>
								<span className="dot"></span>
							</li>
							<li className="active">
								<span className="connector"></span>
								<span className="dot"></span>		
							</li>
							<li>
								<span className="dot"></span>		
							</li>
						</ul>
					)
			} else {
				return (
						<ul className="progress-bar">
							<li>
								<span className="connector"></span>
								<span className="dot"></span>
							</li>
							<li>
								<span className="connector"></span>
								<span className="dot"></span>		
							</li>
							<li className="active">
								<span className="dot"></span>		
							</li>
						</ul>
					)
			}
		} 
});

export default ProgressBar;