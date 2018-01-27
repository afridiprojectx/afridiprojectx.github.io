$(document).ready(function(){
	$('div#collapseMaster a').click(function(){
		var page = $(this).attr('href');
		$('#content').load('html/2-master/'+page+'.html');
		return false;
	});
});