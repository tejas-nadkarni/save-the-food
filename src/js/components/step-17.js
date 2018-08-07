import React from 'react';
import InfoButton from './info-button';
import GblConstants from '../gbl-constants.js';
import gaHelper from '../ga-helper';

var Step17 = React.createClass({
	share: function (e) {
		let $target = $(e.target);
		let platform = $target.data('platform');		
		let shareUrl = getUrl(platform);
		let shareWidth = $(window).width() / 2;
		let shareHeight = $(window).height() / 2;		

		window.open(shareUrl, 'sharer', 'width=' + shareWidth + ',height=' + shareHeight + ',left='+ getLeftPos(shareWidth) +',top=50');

		function getUrl (platform) {
			let url = GblConstants.url;
			let title = encodeURIComponent(GblConstants.title);
			let description = encodeURIComponent(GblConstants.description);
			let fbStatus = encodeURIComponent(GblConstants.fbStatus);			
			let fbCover = url + '/images/facebook-cover.jpg';

			switch (platform) {
				case 'facebook':
					//ga helper
					gaHelper('social', 'facebook share');

					return 'http://www.facebook.com/sharer/sharer.php?u='+ url +'&title=' + title + '&description='+ fbStatus +'&picture=' + fbCover;				
					break;
				case 'twitter':
					//ga helper
					gaHelper('social', 'twitter share');
					
					let twTxt = encodeURIComponent('I want ugly food to #GetShelved @[my supermarket] because food waste sucks.');
					let twHashtags = encodeURIComponent('GetShelved');

					return 'https://twitter.com/share?text='+ twTxt;
			}
		}

		function getLeftPos (shareWidth) {
			let fallback = 20;

			return (shareWidth) ? ($(window).width() / 2) - (shareWidth / 2) : fallback;
		}
	},
	accordionOpenBuy: function() {
		//$(document).on('open.zf.reveal', function () {
					//ga helper
					gaHelper('button', 'buy');

			let $accordion = $('#info-accordion');
			let $accordionPane = $accordion.find('#accordion-buy-info');
			$accordion.foundation('down', $accordionPane, false);
		//});
	},
	render: function () {
		let _this = this;
		$(document).on('open.zf.reveal', function () {
			_this.accordionOpenBuy();
		});

		return(
			<div>
				<div className="row text-center">
					<div className="columns small-12 medium-12 large-12">
						<h2>{this.props.stepData.title}</h2>
					</div>
				</div>
				<div className="row">
					<div className="columns small-4 medium-4 large-4">
						{/*facebook button*/}
						<span className="cta-icon icon-facebook" onClick={this.share} data-platform="facebook"></span>
						<h4>{this.props.stepData.copy_1}</h4>
					</div>

					<div className="columns small-4 medium-4 large-4">
						
						{/*twitter button*/}						
						<span className="cta-icon icon-twitter" onClick={this.share} data-platform="twitter"></span>						
						<h4>{this.props.stepData.copy_2}</h4>
					</div>

					<div className="columns small-4 medium-4 large-4">
						<span className="cta-icon icon-buy" id="buy-ugly-food" data-open="info-modal"></span>
						<h4>{this.props.stepData.copy_3}</h4>
					</div>
				</div>	
			</div>
		);
	}
});

export default Step17;