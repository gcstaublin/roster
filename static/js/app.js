
$( document ).ready(function() {
  console.log( "ready!" );


  // Settings Activated
  $('.js-btn--settings').on('click', function() {
    $('body').addClass('side-nav--is-active');
    $('.modal-overlay').addClass('modal--visible');
    $('.side-nav').addClass('side-nav--is-visible');
  });


  $('.js-form__btn').on('click', function(){
    $('body').removeClass('side-nav--is-active');
    $('.side-nav').removeClass('side-nav--is-visible');
    $('.modal-overlay').removeClass('modal--visible');
  });



// Filter Bar Parent Dropdown
// ----------------------------------------
$('.js-filters__parent').each(function(i, el){
  var parents = $(this);
  var children = $('.dropdown').each(function(){});
  var child = parents.next('.dropdown');
  var toggle = 'dropdown--is-active';

  parents.on('click', function(){
      if(children.hasClass(toggle) && !child.hasClass(toggle) ){
        children.removeClass(toggle);
        child.addClass(toggle);
      } else {
        child.toggleClass(toggle);
      }
    });
});



  $('.dropdown__link').on('click', function(){
    var $link = $(this);
    var $parent = $link.parent('.dropdown');

    $link.addClass('is-selected');
    if( $parent.hasClass('dropdown—is-active') ) {
      $parent.removeClass('dropdown—is-active');
    }
  });



  // Table Child
  // ----------------------------------------
  $('.js-row__parent').each(function(i, el) {
    var parents = $(this);
    var children = $('.row__child').each(function(){});
    var child = parents.next('.row__child');
    var toggle = 'row__child--is-active';

    parents.on('click', function(){
      if ( children.hasClass(toggle) && !child.hasClass(toggle) ) {
        children.removeClass(toggle);
        child.addClass(toggle);
      } else {
        child.toggleClass(toggle);
      }

    });
  });


  // Edit Athlete info
  // ----------------------------------------
  $(".btn--edit").click(function(event){
     // event.preventDefault();
     $('.js-form').prop("disabled", false);
     $(this).removeClass('is-active');
     $('.js-btn--nosave').addClass('is-active');
     $('.js-btn--save').addClass('is-active');
  });

  $('.js-btn--nosave').click(function(event){
    $('.js-form').attr("disabled", true);
    $(this).removeClass('is-active');
    $('.js-btn--save').removeClass('is-active');
    $('.btn--edit').addClass('is-active');
  });





}); // end Ready
