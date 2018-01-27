$(document).ready(function(){
	$('div#collapsePurchases a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/3-purchases/'+page+'.html');
		return false;
	});
});