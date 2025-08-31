var falaz = jQuery.noConflict()

function analizar() {
	falaz('#loading').fadeIn('slow').delay(3000).fadeOut('slow', function () {
		falaz('#result').html('<p style="margin:120px 0;line-height:1.3em;">FALACIA DETECTADA</p>').fadeIn('fast');
	});
};