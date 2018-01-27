$(document).ready(function(){
	$('div#collapseServices a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/5-services/'+page+'.html');
		return false;
	});
});