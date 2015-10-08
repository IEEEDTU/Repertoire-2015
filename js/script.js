// jQuery Document

$(document).ready(function () {
	$('.event-content').hide();
	$(".event-logo").click(function (e) {
		var current = $(this).attr('data-event');
		if ($(e.target).is('.active')) {
			$('.event-logo').removeClass('active');
			closeAccordion();
		} else {
			closeAccordion();
			$('.event-logo').removeClass('active');
			$(this).addClass('active');
			openAccordion(current);
			$(current).fadeIn(500);
		}
	});
	$("#slider").jcider({autoplay:true})
});

function openAccordion(current) {
	$('[data-pos="tl"]').animate({
		//top:"-250px",
		left: "-250px"
	}, 500);
	$('[data-pos="tr"]').animate({
		//top:"-250px",
		right: "-250px"
	}, 500);
	$('[data-pos="bl"]').animate({
		//bottom:"-250px",
		left: "-250px"
	}, 500);
	$('[data-pos="br"]').animate({
		//bottom:"-250px",
		right: "-250px"
	}, 500);
}

function closeAccordion() {
	$('[data-pos="tl"]').animate({
		top: "0px",
		left: "0px"
	}, 500);
	$('[data-pos="tr"]').animate({
		top: "0px",
		right: "0px"
	}, 500);
	$('[data-pos="bl"]').animate({
		bottom: "0px",
		left: "0px"
	}, 500);
	$('[data-pos="br"]').animate({
		bottom: "0px",
		right: "0px"
	}, 500);
	$('.event-content').fadeOut(500);
}

$($("nav ul li a")[1]).click(function(e) {
	e.preventDefault();
	$("html,body").animate({scrollTop:$("#about").offset().top - 70},400)
});

$($("nav ul li a")[2]).click(function(e) {
	e.preventDefault();
	$("html,body").animate({scrollTop:$("#bCont").offset().top - 90},400)
});

$($("nav ul li a")[3]).click(function(e) {
	e.preventDefault();
	$("html,body").animate({scrollTop:$("#contact").offset().top - 80},400)
})