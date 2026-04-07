(function($, Drupal) {

/* SELECT 2
------------------------------------ */
Drupal.behaviors.select2 = {
  attach: function (context, settings) {
    $(once('selects', 'select', context)).each(function(){
      $( 'form select' ).select2({
        placeholder: "Select an option"
      });
      $(once('selectAccessiblity', '.js-form-type-select', context)).each(function(){
        $(document).ready(function(){
          $('.select2-search__field').each(function(){
            var label = $(this).closest('.select2-container').siblings('label').text();
            $(this).attr('aria-label',label).removeAttr('role');
          });
        });
      });
    });
   }
};

})(jQuery, Drupal);
