$(document).ready(function(){
	$('div#collapseFinance a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/7-finance/'+page+'.html');
		return false;
	});
});