// jshint devel:true


(function($){

	var bodyPattern = function(){

		var body = $('body');

		var pattern = new Trianglify({
			cell_size: 75,
			variance: 0.75,
			x_colors: 'random',
			y_colors: 'match_x',
			palette: Trianglify.colorbrewer,
			color_space: 'lab',
			color_function: false,
			stroke_width: 1.51,
			width: window.innerWidth,
			height: window.innerHeight,
			seed: null
		});

		var patternBg = pattern.png();

		$('<div class="body-pattern" style="background-image:url('+patternBg+');" />').appendTo('body');

	};

	$(function(){

		bodyPattern();

	});

}(jQuery));
