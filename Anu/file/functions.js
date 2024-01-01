
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = new Date();
    var startDate = new Date(date);
    var seconds = Math.floor((current - startDate) / 1000);

    var days = Math.floor(seconds / (3600 * 24))+31;
    seconds %= (3600 * 24);

    var hours = Math.floor(seconds / 3600)+18;
    seconds %= 3600;

    var minutes = Math.floor(seconds/ 60);
    seconds %= 60;

	var result = "Since <span class=\"digit\">" + days + "</span> D <span class=\"digit\">" + hours + "</span> H <span class=\"digit\">" + minutes + "</span> M <span class=\"digit\">" + seconds + "</span> S"; 
	$("#clock").html(result);
}
