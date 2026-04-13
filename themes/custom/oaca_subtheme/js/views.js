(function($, Drupal) {

	/* NES AND EVENTS CATEGORIES
	------------------ */
	Drupal.behaviors.filterResultsHeaders = {
	  attach: function (context, settings) {
			$(once('hasValue', '#edit-field-categories-target-id', context)).each(function(){
	      var searchTerm = $(this).find('option:selected').text();
	      if(searchTerm != '- Any -'){
	      	$('.categories-place').html('<span>' + searchTerm + '</span>');
	    	}
	    });
	  }
	}

})(jQuery, Drupal);
