// [CARD]...[/CARD]
Discourse.BBCode.replaceBBCode('item', function(contents) { 
  var url = contents;
  return ['a', {'class': 'item-bbcode','href': "#", 'onmouseenter' : "javascript:url_to_item('"+contents+"')");
});

