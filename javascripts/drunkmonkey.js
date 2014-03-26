$(document).ready(function(){
	initNavigation();
	initJoinusContent();
});


function initNavigation(){
	var $navigation = $('.navigation'),
		$navItems = $navigation.find('.navigation-list .list-item .link'),
		$menu = $('.menu-container'),
		interval = 250;

	$navigation.hover(function() {
		if(!$navigation.hasClass('expanded')) {
			$navigation.animate({
				'width':'200px'
			}, interval);
			$navigation.addClass('expanded');

			$menu.animate({
				'margin-left':'200px'
			},interval);

		}
	}, function(){
		if($navigation.hasClass('expanded')) {
			$navigation.animate({
				'width':'120px'
			}, interval);
			$navigation.removeClass('expanded');

			$menu.animate({
				'margin-left':'120px'
			},interval);
		}
	});
}

function initJoinusContent() {
	var $tabItems = $('.joinus-container .tabs .tab-item'),
		$contentItems = $('.joinus-container .content-list .list-item');

	$tabItems.click(function(){
		var $this = $(this),
			id = $this.attr('data-content-id')
			content = ".joinus-container .content-list .item"+id;
		$(content).siblings().hide();
		$(content).show();
	})
}
