$(document).ready(function(){
	$('div#collapseInventory a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/6-inventory/'+page+'.html');
		return false;
	});
});