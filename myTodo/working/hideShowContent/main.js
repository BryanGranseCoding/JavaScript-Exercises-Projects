jQuery(document).ready(function($){
 
    $('#legacy-item-1').addClass('legacy-item-active');
    $('#legacy-tab-1').addClass('show-legacy-tab');
    $('[id*="legacy-tab"]').not('#legacy-tab-1').addClass('hide-legacy-tab');
      
    $('[id*="legacy-item"]').click(function() {
      
    var selector = $(this).attr('id').replace('item', 'tab');
    var $legacySelect  = $('#' + selector);
     
    $('[id*="legacy-tab"]').removeClass('show-legacy-tab');
    $('[id*="legacy-tab"]').addClass('hide-legacy-tab');
    $legacySelect.addClass('show-legacy-tab');
      
    $('[id*="legacy-item"]').removeClass('legacy-item-active');
    $(this).addClass('legacy-item-active');
        
    });
    });

/* 
faq-item-1 = tab-item-1
faq-tab-1 = content-item-1 
*/