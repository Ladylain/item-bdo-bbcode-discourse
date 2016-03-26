
(function() {
  function replaceItemLink (text) {
    while (text != (text = text.replace(/\[item=([^\]]+)\]((?:(?!\[item=[^\]]+\]|\[\/item\])[\S\s])*)\[\/item\]/ig, function (match, p1, p2, offset, string) {
      return "<a href=\"#\" onmouseenter=\"javascript:url_to_item('"+p1+"')\" class=\"item-bdo\">" + p2 + "</a>";
    })));
    return text;
  }

  Discourse.Dialect.addPreProcessor(replaceItemLink);
  Discourse.Markdown.whiteListTag('a', 'href', 'onmouseenter', 'class');

})();
