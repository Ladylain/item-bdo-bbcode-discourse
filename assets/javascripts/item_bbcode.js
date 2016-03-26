
(function() {
  function replaceItemLink (text) {
    while (text != (text = text.replace(/\[item=([^\]]+)\]((?:(?!\[item=[^\]]+\]|\[\/item\])[\S\s])*)\[\/item\]/ig, function (match, p1, p2, offset, string) {
      var url_img; 
      url_img = $.ajax({
    		   url: "http://digitalsky.fr/aelon/get_content.php",
    		   type: "GET",
    		   cache: false,
    		   dataType: 'jsonp',
    		   data: {url: url},
    		   success: function(reponse){
    		   		/*reponse = jQuery.parseJSON(reponse);
    			   	console.log(reponse);  	*/
    			   	reponse = reponse.split('<div class="outer item_info">');
    			   	reponse = reponse[1].split('</div>');
    			   	reponse = reponse[0];
    			   	urlImage = reponse.split('<td class="icon_cell"><img src="');
    			   	console.log(urlImage);
    			   	urlImage = urlImage[1].split('" class="item_icon" alt="icon"></td>');
    			   	console.log(urlImage);
    			   	urlImageFinal = urlImage[0];
    			   	console.log(urlImageFinal);
    			   	return urlImageFinal;
    			}
    	});
      return "<a href=\"http://bddatabase.net/fr/item/"+p1+"\" class=\"item-bdo\"><img src=\"http://bddatabase.net/" + url_img + "\"" + p2 + "</img></a>";
    })));
    return text;
  }
  Discourse.Dialect.addPreProcessor(replaceItemLink);
  Discourse.Markdown.whiteListTag('a', 'class', 'item-bdo');

})();
