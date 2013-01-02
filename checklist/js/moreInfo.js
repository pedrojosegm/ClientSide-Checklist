//Expand Two Lines////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.valueWrapper').on('mouseover', 'span.infoPos', function(event) {
	var $selectedInfo = $(event.target).closest(".checkTitle").next(".moreInfo").addClass('infoExpand');
});
   		
$('.form-signin .valueWrapper').mouseleave(function() {
	$('p.infoExpand', '.form-signin').removeClass('infoExpand');
});

//Expand One Line////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.valueWrapper').on('mouseover', 'span.infoPos', function(event) {
	var $selectedInfo = $(event.target).closest(".checkTitle").next(".moreInfoLess").addClass('infoExpandLess');
});
   		
$('.form-signin .valueWrapper').mouseleave(function() {
	$('p.infoExpandLess', '.form-signin').removeClass('infoExpandLess');
});


//Expand Three Lines////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('.valueWrapper').on('mouseover', 'span.infoPos', function(event) {
	var $selectedInfo = $(event.target).closest(".checkTitle").next(".moreInfoMore").addClass('infoExpandMore');
});
   		
$('.form-signin .valueWrapper').mouseleave(function() {
	$('p.infoExpandMore', '.form-signin').removeClass('infoExpandMore');
});
