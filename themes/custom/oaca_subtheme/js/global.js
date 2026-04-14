(function($, Drupal) {

	/* LAYOUT
	------------------ */
	Drupal.behaviors.removeEmptyThings = {
	  attach: function (context, settings) {
			$(once('removeEmpty', '.layout > .layout__region:not(.ui-sortable)', context)).each(function(){
	      if(!$(this).children().length){
	        $(this).remove();
	      }
	      if($('.block-field-blocknodestafffield-address:only-child',this).length){
	      	if(!$('.block-field-blocknodestafffield-address .country:only-child').children().length){
	      		$(this).remove();
	      	}
	      }
	      $('.layout--twocol-sideleft-split').each(function(){
	      	if(!$('.layout__region--sidebar:not(.ui-sortable', this).length){
	      		$(this).addClass('no-sidebar');
	      	}
	      });
	    });
	  }
	}

		/* VIDEO BANNER
	-------------------*/
	Drupal.behaviors.videoBanner = {
    attach: function (context, settings) {
			$(once('hasVideo', '.paragraph--type--video-banner', context)).each(function(){
	      if(!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
	     		$('.field--name-field-video-upload', this).fadeIn(500);
	      }else{
	      	$('.field--name-field-image', this).fadeIn(500);
	      }
      });
    }
  };

	/* SEARCH LABEL
	------------------ */
	Drupal.behaviors.addSearchInputLabel= {
    attach: function() {
    	$(document).ready(function(){
	      $('#gs_tti50').each(function(){
	      	$(this).prepend('<label for="gsc-i-id1" class="visually-hidden">Search</label>');
	      });
	    });
	  }
	}

	/* BACK TO TOP
	------------------ */
	Drupal.behaviors.removeBTT= {
    attach: function() {
    	$(document).ready(function(){
	      $('#backtotop').remove();
	    });
	  }
	}

	/* REMOVE HEADER ROLES
	------------------ */
	Drupal.behaviors.removeHeaderRoles= {
    attach: function() {
    	$(document).ready(function(){
	      $('#mandatory-header-wrapper').removeAttr('role');
	    });
	  }
	}

	/* CHANGE FOLWELL MOBILE MENU WORDMARK
	------------------ */
	Drupal.behaviors.mobileMenuTweak = {
    attach: function() {
    	$(document).ready(function(){
	      $('.mm-navbar.wordmarked img').each(function(){
	      	$(this).attr('src', '/' + drupalSettings.oaca_subtheme.themePath + '/images/gold-M.svg');
	      });
	    });
	  }
	}

	/* REMOVE BACK ARIA
	------------------ */
	Drupal.behaviors.slickTweak = {
    attach: function() {
    	$(document).ready(function(){
	      $('.slick-track').each(function(){
	      	$(this).attr('aria-label', 'slideshow');
	      	$('.slick-dots').removeAttr('role');
	      	$('.slick-dots li').removeAttr('aria-selected aria-hidden');
	      });
	    });
	  }
	}

/* SHOW CORRECT SMART DATE FORMAT ON EVENT NODES
		------------------------------ */
		Drupal.behaviors.eventDateFormat = {
	    attach: function (context, settings) {
				$(once('showCorrectDateFormat', '.page-node-type-events .block-field-blocknodeeventsfield-smart-date', context)).each(function(){
					let $banner = $('.block-field-blocknodeeventsfield-banner');
					if ($banner.length == 1) {
						let $dateTime = $('.page-node-type-events .block-field-blocknodeeventsfield-smart-date:nth-of-type(4)');
						let $dateOnly = $('.page-node-type-events .block-field-blocknodeeventsfield-smart-date:nth-of-type(5)');
						let $undisclosed = $('.field--name-field-undisclosed')[0].innerText.includes('True');
						if ($undisclosed) {
							$dateOnly.css('display', 'block');
							$dateTime.empty();
						} else {
							$dateTime.css('display', 'block');
							$dateOnly.empty();
						}
					} else {
						let $dateTime = $('.page-node-type-events .block-field-blocknodeeventsfield-smart-date:nth-of-type(3)');
						let $dateOnly = $('.page-node-type-events .block-field-blocknodeeventsfield-smart-date:nth-of-type(4)');
						let $undisclosed = $('.field--name-field-undisclosed')[0].innerText.includes('True');
						if ($undisclosed) {
							$dateOnly.css('display', 'block');
							$dateTime.empty();
							let = dateStr = $dateOnly[0].children[0].innerText;
							let splitStr = dateStr.substring(dateStr.indexOf(',') + 6);
							if (splitStr.length > 0 && !dateStr.includes(' - ')){
								dateStr = dateStr.replace(splitStr, ' - ' + splitStr);
								let $date = $('.page-node-type-events .block-field-blocknodeeventsfield-smart-date:nth-of-type(4) > div');
								$date.text(dateStr);
							}
						} else {
							$dateTime.css('display', 'block');
							$dateOnly.empty();
						}
					}
		    });
		  }
		}

	/* REMOVE target="_blank" FROM ADDTOANY BUTTONS
		------------------------------ */
		Drupal.behaviors.fixAddToAnyTargets = {
		  attach(context) {
		    once('addtoany-target-fix', '.a2a_kit a', context).forEach((link) => {
		      link.setAttribute('title', '(opens in a new window)');
		    });
		  }
		};

})(jQuery, Drupal);
