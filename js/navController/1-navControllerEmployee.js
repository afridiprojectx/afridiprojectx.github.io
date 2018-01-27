$(document).ready(function(){
	$('div#collapseAdministration a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/1-administration/'+page+'.html');
		return false;
	});
});

