// [CARD]...[/CARD]
Discourse.BBCode.replaceBBCode('item', function(contents) { 
  var url = contents;
  return ['a', {'class': 'item-bbcode','href': "#", 'onmouseover' : "javascript:url_to_item('"+contents+"')");
});

