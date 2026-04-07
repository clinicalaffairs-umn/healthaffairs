(function($, Drupal) {

	/* NES AND EVENTS CATEGORIES
	------------------ */
	Drupal.behaviors.filterResultsHeaders = {
	  attach: function (context, settings) {
			$(once('hasValue', '#edit-field-categories-target-id option:selected', context)).each(function(){
	      var searchTerm = $(this).text();
	      if(searchTerm != '- Any -'){
	      	$('.categories-place').html('<span>' + searchTerm + '</span>');
	    	}
	    });
	  }
	}

	/* SPEAKER SERIES ACCORDION
	------------------------- */
	Drupal.behaviors.seriesAccordions = {
	  attach: function (context, settings) {
			$(once('isAccordion', '.events.speaker-series', context)).each(function(){
	    	console.log('accordions');
	      $('.accordion-header a', this).click(function(e){
          e.preventDefault();
          var activeHeader = $(this).parent('.accordion-header');
          if(activeHeader.closest('.views-row.accord-active').length){
            $('.accord-active').removeClass('accord-active');
            activeHeader.next().slideUp(500).attr('aria-hidden', 'true').end().find('a').attr('aria-expanded', "false");
          }else{
            $('.accord-active').find('.accordion-content').slideUp(500).attr('aria-hidden', 'true').end().removeClass('accord-active').find('.accordion-header a').attr('aria-expanded', 'false');
            activeHeader.parent('.views-row').addClass('accord-active').end().next().slideDown(500).attr('aria-hidden', 'false').end().find('a').attr('aria-expanded', "true");
          }
        });
	    });
	  }
	}


})(jQuery, Drupal);
