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
	      	$(this).attr('src','/sites/clinicalaffairs.umn.edu/themes/oaca_subtheme/images/gold-M.svg');
	      });
	    });
	  }
	}

	/* REMOVE FOLWELL VERTICAL MAIN NAV ON BASIC MICROSITE PAGES
	------------------ */
	Drupal.behaviors.removeSidebarMainNav = {
    attach: function (context, settings) {
			$(once('removeSideNav', '.path-node.microsite .folwell-vertical-nav.menu--main', context)).each(function(){
	      $(this).remove();
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

/* CHANGE SITE IDENTITY BASED ON MICROSITE
	------------------------------ */
	Drupal.behaviors.microIdentity = {
    attach: function (context, settings) {
			$(once('changeSiteIdentity', '.microsite .folwell-identity', context)).each(function(){
	      $('.prefix-name a', this).attr('href','/').text('Office of Academic Clinical Affairs');
	      var urlCurrent = window.location.pathname;
        switch(true) {
          case urlCurrent.startsWith('/covid-19-updates',0):
            $('.sitename a', this).attr('href','/covid-19-updates').text('Covid-19 Updates');
            break;
          case urlCurrent.startsWith('/mhi',0):
            $('.sitename a', this).attr('href','/mhi').text('Mobile Health Initiative');
            break;
        }
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
						} else {
							$dateTime.css('display', 'block');
							$dateOnly.empty();
						}
					}
		    });
		  }
		}




})(jQuery, Drupal);
