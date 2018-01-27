$(document).ready(function(){
	$('div#collapseReports a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/8-reports/'+page+'.html');
		return false;
	});
});