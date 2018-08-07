import React from 'react';


var InfoModal = React.createClass({
	closeModal: function() {
		$('#info-modal').foundation('close');
	},
	accordionCloseAll: function() {
		let $accordion = $('#info-accordion');
		let $accordionPanes = $accordion.find('.accordion-content');

		$accordionPanes.each(function () {
			let $pane = $(this);

			$accordion.foundation('up', $pane, false);
		});
	},
	render: function () {
		let _this = this;
		$(document).on('closed.zf.reveal', function () {
			_this.accordionCloseAll();
		});
		return (
			<div className="reveal large" id="info-modal" data-reveal>  	  
			 	  <ul className="accordion" data-accordion data-allow-all-closed="true" id="info-accordion">
				  	<li className="accordion-item" data-accordion-item>
					    <a href="#" className="accordion-title">
					    	<span className="txt">What is ugly food?</span>
					    	<span className="divider"></span>
					    </a>
					    <div className="accordion-content" data-tab-content>		    	
					      <p>Simply put, "ugly food" is any fruit or veggie that doesn't fit the strict standards set by the government. Grocers reject this misshapen produce which leads to senseless and harmful food waste. For more, follow us on Twitter  
					      <strong><a target="_blank" href="https://twitter.com/search?q=%40gogetshelved&src=typd"> @GoGetShelved</a></strong></p>
					    </div>
					  </li>
					  <li className="accordion-item" data-accordion-item>
					    <a href="#" className="accordion-title">
					    	<span className="txt">Where can I buy some?</span> 
					    	<span className="divider"></span>
					    </a>
					    <div className="accordion-content" id="accordion-buy-info" data-tab-content>		    	
					      <p>Check out these links and place an order.</p>
					      <p>Online: <a target="_blank" href="http://www.imperfectproduce.com/#ugly-produce-delivered">Imperfect Produce, </a>
					      <a target="_blank" href="http://www.hungryharvest.net/#how-it-works">Hungry Harvest</a> </p>
					      <p>In-Store: <a target="_blank" href="http://misfitjuicery.co">Misfit Juice (DC, NY, CT, NJ),</a>
					      <a target="_blank" href="http://dailytable.org/our-food/"> Daily Table (MA)</a> </p>
					    </div>
					    
					  </li>
					  <li className="accordion-item" data-accordion-item>
					    <a href="#" className="accordion-title">
					    	<span className="txt">How can I help?</span>
					    	<span className="divider"></span>
					    </a>
					    <div className="accordion-content" data-tab-content>		    	
					      <p>Get in touch and stay informed. Here are some organizations who are shedding light on Ugly Food and food waste: 
					      <a target="_blank" href="http://www.uglyproduceisbeautiful.com"> Ugly Produce Is Beautiful, </a>
					      <a target="_blank" href="http://www.foodcowboy.com">Food Cowboy, </a>
					      <a target="_blank" href="http://www.endfoodwaste.org">End Food Waste</a></p>
					    </div>
					  </li>	 
				  </ul>
			  <button className="close-button" aria-label="Close modal" type="button" onClick={this.closeModal}>
			    <span aria-hidden="true">x</span>
			  </button>
			</div>
		);
	}
});

export default InfoModal;