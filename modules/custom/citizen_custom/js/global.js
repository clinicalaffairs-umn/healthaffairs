(function($, Drupal) {

/* BLOCK LAYOUT PATH CHANGE
----------------------- */
Drupal.behaviors.blockLink = {
  attach: function (context, settings) {
    $(once('changeBlockUIPath', '.role-site_manager:not(.role-administrator) a[href="/admin/structure/block"]', context)).each(function(){
      $(this).attr('href','/admin/structure/block/block-content').text('Custom Blocks');
      if($(this).closest('li.tabs__tab').length){
      	$(this).closest('li.tabs__tab').remove();
      }
      $('a[href="/admin/structure/block/block-content/types"]').closest('li.tabs__tab').remove();
    });
  }
};


})(jQuery, Drupal);
