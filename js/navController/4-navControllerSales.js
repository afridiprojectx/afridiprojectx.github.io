$(document).ready(function(){
	$('div#collapseSales a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/4-sales/'+page+'.html');
		return false;
	});
});