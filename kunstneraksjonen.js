function domReady(f){/in/.test(document.readyState)?setTimeout('domReady('+f+')',9):f()}

domReady(function(){
  var stylesheetUrl = "http://manualdesign.github.io/kunstneraksjonen.css";

  var startAt = new Date(2013, 10, 19, 10, 00);
  var endAt = new Date(2013, 10, 19, 15, 00);
  var now = new Date();

  if (!document.getElementById("kunstneraksjonenBlackout") && startAt <= now && endAt >= now) {
    var stylesheet = document.createElement("link");
    stylesheet.type = "text/css";
    stylesheet.rel = "stylesheet";
    stylesheet.href = stylesheetUrl;
    document.getElementsByTagName("head")[0].appendChild(stylesheet);
    var container = document.createElement("div");
    container.innerHTML = "<div class=\"content\"><div class=\"heading\">#kunstneraksjonen</div><div class=\"para\">Vi støtter den nasjonale aksjonen for norske kunstnere og kunstens fremtid.<br>Ikke benytt deg av kunst og kultur i dag!</div><div class=\"para link\"><a href=\"https://www.facebook.com/events/361313150671995\">Les mer og delta du også!</a></div></div>";
    container.id = "kunstneraksjonenBlackout";
    document.body.appendChild(container);
  }
});