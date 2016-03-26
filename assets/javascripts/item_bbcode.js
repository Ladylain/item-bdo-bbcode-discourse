(function() {
	function url_to_item(item_url){
	$('#Main').stop();
	$('#Main').fadeOut(function(){
		$('#Main').empty();
	});
	
	var url = item_url;
	$.ajax({
		   url: "get_content.php",
		   type: "POST",
		   data: {url: url},
		   success: function(reponse){
		   		reponse = jQuery.parseJSON(reponse);
			   	console.log(reponse);  	
			   	reponse = reponse.split('<div class="outer item_info">');
			   	reponse = reponse[1].split('</div>');
			   	reponse = reponse[0];
			   	urlImage = reponse.split('<td class="icon_cell"><img src="');
			   	console.log(urlImage);
			   	urlImage = urlImage[1].split('" class="item_icon" alt="icon"></td>');
			   	console.log(urlImage);
			   	urlImageFinal = urlImage[0];
			   	console.log(urlImageFinal);
			   	$('#Main').append(reponse);
			   	$('td.icon_cell').empty().append('<img src="http://bddatabase.net'+urlImageFinal+'" />');
			   	$('#Main').fadeIn();
			}
	});
}
  function replaceItemLink (text) {
    while (text != (text = text.replace(/\[item=([^\]]+)\]((?:(?!\[item=[^\]]+\]|\[\/item\])[\S\s])*)\[\/item\]/ig, function (match, p1, p2, offset, string) {
      return "<a href=\"#\" onmouseenter=\"javascript:url_to_item('"+p1+"')\" class=\"item-bdo\">" + p2 + "</a>";
    })));
    return text;
  }

Discourse.Dialect.addPreProcessor(replaceItemLink);
Discourse.Markdown.whiteListTag('a', 'class', 'item-bdo');

})();
